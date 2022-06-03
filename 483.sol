pragma solidity ^0.8.14;
// SPDX-License-Identifier: AGPL-3.0-only
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
contract DecentralizedLottery {
    mapping(address=>uint) public balances;
    uint private startTime;
    address public xAdd;
    mapping(uint => Lottery) public allLotteries;
    uint currentLotteryNumber;
    TLToken tlToken;
    TicketContract ticketContract;
    uint public currentTicketNumber = 0;
    constructor(address ticketAdress, address tlAdress) {
        startTime = block.timestamp;
        currentLotteryNumber = 0;
        tlToken = TLToken(tlAdress);
        ticketContract = TicketContract(ticketAdress);
        lastDeterminedLottery = 0;
    }
    struct Lottery {
        uint currentMoneyAmount;
        uint currentHash;
        mapping(address=>uint[]) ownedTicketNumbers;
        uint[] revealedTickets;
        uint[] winningTicketNos; 
        bool hasDetermined;
    }
    struct Ticket{
        uint roundNo;
        bytes32 randomHash;
        bool revealed;
        bool withdrawn;
        bool hasRefunded;
        uint prize;
    }

    Ticket[] public allTicketList;
    uint lastDeterminedLottery;

    function getPeriodNo() public view returns (uint256) {
        return((block.timestamp - startTime) / 7 minutes);
    }
    function getPeriodDay() public view returns (uint256) {
        return ((block.timestamp - startTime) % 7 minutes) / 1 minutes;
    }
    function depositTL(uint	amnt) public {
        require(tlToken.transferFrom(msg.sender,address(this),amnt), "Cannot be performed!");
        balances[msg.sender] += amnt;
    }
    function withdrawTL(uint amnt)	public {
        require(balances[msg.sender] > amnt, "Not enough money to deposit");
        require(tlToken.transfer(msg.sender, amnt), "Cannot be performed!");
        balances[msg.sender] -= amnt;
    }
    // function x(uint n) public {
    //     allLotteries[getPeriodNo()].ownedTicketNumbers[msg.sender].push(currentTicketNumber);
    //     currentTicketNumber += 1;
    // }
    function buyTicket(bytes32 hash_rnd_number) public {
        uint periodNo = getPeriodNo();
        uint periodDay = getPeriodDay();
        xAdd = msg.sender;
        require(periodDay < 4, "The lottery is not in the buying stage");
        require(balances[msg.sender] >= 10, "Not enough money to buy a ticket!");
        ticketContract.createTicket(msg.sender,  currentTicketNumber);
        Ticket memory ticket = Ticket({
            roundNo: periodNo,
            randomHash: hash_rnd_number,
            revealed: false,
            withdrawn: false,
            hasRefunded: false,
            prize: 0
        });
        allTicketList.push(ticket); 
        xAdd = msg.sender;
        allLotteries[periodNo].ownedTicketNumbers[msg.sender].push(currentTicketNumber);
        currentTicketNumber += 1;
        balances[msg.sender] -= 10;
        allLotteries[periodNo].currentMoneyAmount += 10;
    }
    function collectTicketRefund(uint ticket_no) public {
        require(ticketContract.exists(ticket_no) && ticketContract.ownerOf(ticket_no) == msg.sender, "You do not own this ticket!");
        uint periodNo = getPeriodNo();
        require(allTicketList[ticket_no].roundNo < periodNo, "Period has not ended!");
        require(allTicketList[ticket_no].revealed == false, "This ticket is revealed!");
        require(allTicketList[ticket_no].hasRefunded == false, "This ticket has already been refunded!");
        allTicketList[ticket_no].hasRefunded == true;
        balances[msg.sender] += 5;
    }
    function revealRndNumber(uint ticketno, uint rnd_number) public {
        require(ticketContract.exists(ticketno) && ticketContract.ownerOf(ticketno) == msg.sender, "You do not own this ticket!");
        require(allTicketList[ticketno].revealed == false, "The ticket is already revealed!");
        uint periodNo = getPeriodNo();
        require(periodNo == allTicketList[ticketno].roundNo, "You missed the revealing period!");
        uint periodDay = getPeriodDay();
        require(periodDay >= 4, "The lottery is not in the revealing stage");
        bytes32 hashed = keccak256(abi.encodePacked(rnd_number, msg.sender));
        require(allTicketList[ticketno].randomHash == hashed, "Your random number does not match, try again!");
        allTicketList[ticketno].revealed = true;
        allLotteries[periodNo].currentHash ^= rnd_number;
        allLotteries[periodNo].revealedTickets.push(ticketno);
    
    }
    function getLastOwnedTicketNo(uint lottery_no)	public view	returns(uint,uint8	status) {
        uint len = allLotteries[lottery_no].ownedTicketNumbers[msg.sender].length;
        if(allLotteries[lottery_no].ownedTicketNumbers[msg.sender].length > 0){
            return (allLotteries[lottery_no].ownedTicketNumbers[msg.sender][len-1], 1);
        }
        else {
            return (0,0);
        }
    }
    function getIthOwnedTicketNo(uint i,uint lottery_no) public	view returns(uint,uint8	status) {
        if(allLotteries[lottery_no].ownedTicketNumbers[msg.sender].length > i){
            return (allLotteries[lottery_no].ownedTicketNumbers[msg.sender][i-1],1);
        }
        else {
            return (0,0);
        }
    }
    function checkIfTicketWon(uint ticket_no) public view returns (uint) {
        require(ticketContract.exists(ticket_no)&& ticketContract.ownerOf(ticket_no) == msg.sender, "You do not own this ticket!");
        return  allTicketList[ticket_no].prize; 
    }
    function determineLottery(uint ticket_no) public {
        require(ticketContract.exists(ticket_no)&& ticketContract.ownerOf(ticket_no) == msg.sender, "You do not own this ticket!");
        uint lotteryNo = allTicketList[ticket_no].roundNo;
        if(allLotteries[lotteryNo].hasDetermined) {
            return;
        }
        uint i = 1;
        uint M = allLotteries[lotteryNo].currentMoneyAmount;
        uint Pi;
        bytes32 hashed;
        uint winnerTicket;
        if(allLotteries[lotteryNo].revealedTickets.length > 0) {
            for(uint j = 1; j <= M; j *= 2) {
                Pi = M/(2**i) +(M/ (2**(i-1))%2);
                hashed = keccak256(abi.encodePacked(allLotteries[lotteryNo].currentHash, i)); 
                winnerTicket = uint(hashed) % allLotteries[lotteryNo].revealedTickets.length;
                allTicketList[allLotteries[lotteryNo].revealedTickets[winnerTicket]].prize += Pi;
                allLotteries[lotteryNo].winningTicketNos.push(winnerTicket);
                i++;
            }
            Pi = M/(2**i) +(M/ (2**(i-1))%2);
            hashed = keccak256(abi.encodePacked(allLotteries[lotteryNo].currentHash, i)); 
            winnerTicket = uint(hashed) % allLotteries[lotteryNo].revealedTickets.length;
            allTicketList[winnerTicket].prize += Pi;
            allLotteries[lotteryNo].winningTicketNos.push(winnerTicket);

        }
        allLotteries[lotteryNo].hasDetermined = true;
        
    }
    function determineLotteryWithLotteryNo(uint lotteryNo) public {
        if(allLotteries[lotteryNo].hasDetermined) {
            return;
        }
        uint i = 1;
        uint M = allLotteries[lotteryNo].currentMoneyAmount;
        uint Pi;
        bytes32 hashed;
        uint winnerTicket;
        if(allLotteries[lotteryNo].revealedTickets.length > 0) {
            for(uint j = 1; j <= M; j *= 2) {
                Pi = M/(2**i) +(M/ (2**(i-1))%2);
                hashed = keccak256(abi.encodePacked(allLotteries[lotteryNo].currentHash, i)); 
                winnerTicket = uint(hashed) % allLotteries[lotteryNo].revealedTickets.length;
                allTicketList[allLotteries[lotteryNo].revealedTickets[winnerTicket]].prize += Pi;
                allLotteries[lotteryNo].winningTicketNos.push(winnerTicket);
                i++;
            }
            Pi = M/(2**i) +(M/ (2**(i-1))%2);
            hashed = keccak256(abi.encodePacked(allLotteries[lotteryNo].currentHash, i)); 
            winnerTicket = uint(hashed) % allLotteries[lotteryNo].revealedTickets.length;
            allTicketList[winnerTicket].prize += Pi;
            allLotteries[lotteryNo].winningTicketNos.push(winnerTicket);

        }
        allLotteries[lotteryNo].hasDetermined = false;
        
    }
    function collectTicketPrize(uint ticket_no)	public {
        require(ticketContract.exists(ticket_no) && ticketContract.ownerOf(ticket_no) == msg.sender, "You do not own this ticket!");
        require(allTicketList[ticket_no].prize > 0, "This ticket has no price!");
        balances[msg.sender] += allTicketList[ticket_no].prize;
        allTicketList[ticket_no].prize = 0;
    }
    function getIthWinningTicket(uint i, uint lottery_no) public view returns (uint	ticket_no,uint amount) {
        require(ticketContract.exists(ticket_no), "No ticket found");
        require(getPeriodNo() > lottery_no, "No lottery exists or can be concluded!");
        require(allLotteries[lottery_no].winningTicketNos.length > i-1, "No i found!");
        ticket_no = allLotteries[lottery_no].winningTicketNos[i-1];
        amount = allTicketList[allLotteries[lottery_no].winningTicketNos[i-1]].prize;
        // return(allLotteries[lottery_no].winningTicketNos.[i-1], allTicketList[allLotteries[lottery_no].winningTicketNos[i-1]]);

    }
    function getLotteryNo(uint unixtimeinweek) public view returns (uint lottery_no) {
        lottery_no = ((unixtimeinweek - startTime) / 7 minutes);
    }
    function getTotalLotteryMoneyCollected(uint	lottery_no)	public view	returns	(uint amount){
        return allLotteries[lottery_no].currentMoneyAmount;
    }
    function returnHash(uint num) public view returns (bytes32) {
        return (keccak256(abi.encodePacked(num, msg.sender)));
    }
    function returnBalance() public view returns (uint){
        return balances[msg.sender];
    }
    
   
}
contract TicketContract is ERC721 {
    constructor()  ERC721("LotteryTicket", "") {
        
    }
    function exists(uint256 tokenId) public view returns(bool) {
        return(_exists(tokenId));
    }
    function createTicket(address to, uint256 tokenId) public  {
        _safeMint(to, tokenId);
    } 
}

contract TLToken is ERC20 {
    uint public y;
    address public z;
    constructor() ERC20("TLToken", "TL") {
        _mint(msg.sender, 100000);
        y = balanceOf(msg.sender);
        z = msg.sender;
    }
}