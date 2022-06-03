var lottery_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ticketAdress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tlAdress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allLotteries",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "currentMoneyAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "currentHash",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "hasDetermined",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allTicketList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "roundNo",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "randomHash",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "revealed",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "withdrawn",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "hasRefunded",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "prize",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hash_rnd_number",
				"type": "bytes32"
			}
		],
		"name": "buyTicket",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ticket_no",
				"type": "uint256"
			}
		],
		"name": "checkIfTicketWon",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ticket_no",
				"type": "uint256"
			}
		],
		"name": "collectTicketPrize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ticket_no",
				"type": "uint256"
			}
		],
		"name": "collectTicketRefund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentTicketNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amnt",
				"type": "uint256"
			}
		],
		"name": "depositTL",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ticket_no",
				"type": "uint256"
			}
		],
		"name": "determineLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "lotteryNo",
				"type": "uint256"
			}
		],
		"name": "determineLotteryWithLotteryNo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lottery_no",
				"type": "uint256"
			}
		],
		"name": "getIthOwnedTicketNo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lottery_no",
				"type": "uint256"
			}
		],
		"name": "getIthWinningTicket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ticket_no",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "lottery_no",
				"type": "uint256"
			}
		],
		"name": "getLastOwnedTicketNo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "unixtimeinweek",
				"type": "uint256"
			}
		],
		"name": "getLotteryNo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "lottery_no",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPeriodDay",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPeriodNo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "lottery_no",
				"type": "uint256"
			}
		],
		"name": "getTotalLotteryMoneyCollected",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "returnHash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ticketno",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rnd_number",
				"type": "uint256"
			}
		],
		"name": "revealRndNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amnt",
				"type": "uint256"
			}
		],
		"name": "withdrawTL",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "xAdd",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var tl_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "y",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "z",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var token_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "createTicket",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "exists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
// import detectEthereumProvider from '@metamask/detect-provider';
// import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
// this returns the provider, or null if it wasn't detected
// const provider = await detectEthereumProvider();

// if (provider) {
//   startApp(provider); // Initialize your app
// } else {
//   console.log('Please install MetaMask!');
// }

// function startApp(provider) {
//   // If the provider returned by detectEthereumProvider is not the same as
//   // window.ethereum, something is overwriting it, perhaps another wallet.
//   if (provider !== window.ethereum) {
//     console.error('Do you have multiple wallets installed?');
//   }
//   // Access the decentralized web!
// }
const provider = new ethers.providers.Web3Provider(window.ethereum);
(async () => {
try {
    await provider.send("eth_requestAccounts", []);
} catch (e) {
    console.log(e)
}
})();

const signer = provider.getSigner();
console.log("Account:",(async () => {
	await signer.getAddress()
	})() );
console.log(signer);

// var Contract = require('web3-eth-contract');

// // set provider for all later instances to use
// Contract.setProvider('ws://localhost:8081');
const lotteryAdress = "0x19d8451893FAFd9E37f06bd36D355032D9217D15";
const tlTokenAdress = "0xEA9FcA53D7Ed411B14977A747fBE9e2ce4109B0b";
const ticketAdress = "0x8e888bF7C97009e50296e3AC55FaB830aAe4aE28";

const lottery_contract = new ethers.Contract(lotteryAdress, lottery_abi, signer); 
const tl_contract = new ethers.Contract(tlTokenAdress, tl_abi, signer); 
const ticket_contract = new ethers.Contract(ticketAdress, token_abi, signer); 

// var myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
//     from: '0x1234567890123456789012345678901234567891', // default from address
//     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
// });

var accounts = [];
(async () => {
	accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	})();
 
var currentAccount = "";
(async function () {
	currentAccount = await signer.getAddress();
	console.log(currentAccount);
  })();


async function approve() {
	const inputNum = document.getElementById("approve_amount").value;
	const input = inputNum.toString();

    tl_contract.approve(lotteryAdress,input).then(function(transaction){
		console.log(transaction);
		if(transaction.hash) {
			document.getElementById("approve_result").innerText = "Successful! Transaction Hash: " + transaction.hash;
		}
	  }).catch(function(error){
		document.getElementById("approve_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;

}

async function getHash() {
	const inputNum = document.getElementById("get_hash").value;
	const input = inputNum.toString();
	let h = await lottery_contract.returnHash(input);
	document.getElementById("hash_result").innerText = "Successful! Your random number hash: " + h;
}

async function depositTl(){
	const inputNum = document.getElementById("deposit_tl").value;
	const input = inputNum.toString();
	lottery_contract.depositTL(input).then(function(transaction){
		console.log(transaction);
		if(transaction.hash) {
			document.getElementById("deposit_result").innerText = "Successful! Transaction Hash: " + transaction.hash;
		}
	  }).catch(function(error){
		document.getElementById("deposit_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}

async function buyTicket(){
	const inputNum = document.getElementById("buy_ticket").value;
	const input = inputNum.toString();
	lottery_contract.buyTicket(input).then(function(transaction){
		console.log(transaction);
		if(transaction.hash) {
			document.getElementById("buy_result").innerText = "Successful! Transaction Hash: " + transaction.hash;
		}
	  }).catch(function(error){
		document.getElementById("buy_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}

async function chechIfTicketWon(){
	const inputNum = document.getElementById("check_ticket").value;
	const input = inputNum.toString();
	lottery_contract.determineLottery(input).then(function(transaction) {
		console.log(transaction);
		lottery_contract.checkIfTicketWon(input).then(function(prize){
			console.log(prize);
			document.getElementById("check_ticket_result").innerText = "Successful! Your prize is: " + prize;
		  }).catch(function(error){
			document.getElementById("check_ticket_result").innerText = "Error! Cause: " + error.data.message;
		  }) ;
	}).catch(function(error){
		document.getElementById("check_ticket_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
	
}

async function collectTicket(){
	const inputNum = document.getElementById("collect_ticket").value;
	const input = inputNum.toString();
	lottery_contract.collectTicketPrize(input).then(function(transaction){
		console.log(transaction);
		if(transaction.hash) {
			document.getElementById("collect_ticket_result").innerText = "Successful! Transaction Hash: " + transaction.hash;
		}
	  }).catch(function(error){
		document.getElementById("collect_ticket_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function collectRefund(){
	const inputNum = document.getElementById("collect_refund").value;
	const input = inputNum.toString();
	lottery_contract.collectTicketRefund(input).then(function(transaction){
		console.log(transaction);
		if(transaction.hash) {
			document.getElementById("collect_refund_result").innerText = "Successful! Transaction Hash: " + transaction.hash;
		}
	  }).catch(function(error){
		document.getElementById("collect_refund_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function withdrawTl(){
	const inputNum = document.getElementById("withdraw_tl").value;
	const input = inputNum.toString();
	lottery_contract.withdrawTL(input).then(function(transaction){
		console.log(transaction);
		if(transaction.hash) {
			document.getElementById("withdraw_result").innerText = "Successful! Transaction Hash: " + transaction.hash;
		}
	  }).catch(function(error){
		document.getElementById("withdraw_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function revealNumber(){
	const ticketNum = document.getElementById("reveal_ticket").value;
	const randomNum = document.getElementById("reveal_ticket").value;
	const inputTicket = ticketNum.toString();
	const inputRandom = randomNum.toString();
	lottery_contract.revealRndNumber(inputTicket, inputRandom).then(function(transaction){
		console.log(transaction);
		if(transaction.hash) {
			document.getElementById("reveal_result").innerText = "Successful! Transaction Hash: " + transaction.hash;
		}
	  }).catch(function(error){
		document.getElementById("reveal_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function getIthOwned(){
	const ticketNum = document.getElementById("ith_i").value;
	const randomNum = document.getElementById("ith_lottery").value;
	const inputTicket = ticketNum.toString();
	const inputRandom = randomNum.toString();
	lottery_contract.getIthOwnedTicketNo(inputTicket, inputRandom).then(function(res){
		document.getElementById("ith_result").innerText = "Your i'th Ticket Number: " + res;
	  }).catch(function(error){
		document.getElementById("ith_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function getIthWinner(){
	const ticketNum = document.getElementById("winner_ith_i").value;
	const randomNum = document.getElementById("winner_ith_lottery").value;
	const inputTicket = ticketNum.toString();
	const inputRandom = randomNum.toString();
	lottery_contract.determineLotteryWithLotteryNo(randomNum).then(function(transaction) {
		lottery_contract.getIthWinningTicket(inputTicket, inputRandom).then(function(res){
			document.getElementById("winner_ith_result").innerText = "i'th Winner Number: " + res;
		  }).catch(function(error){
			document.getElementById("winner_ith_result").innerText = "Error! Cause: " + error.data.message;
		  }) ;
	}).catch(function(error){
		document.getElementById("winner_ith_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function getLastTicket(){
	const lotteryNum = document.getElementById("last_lottery").value;
	const inputLottery = lotteryNum.toString();
	lottery_contract.getLastOwnedTicketNo(inputLottery).then(function(res){
		document.getElementById("last_lottery_result").innerText = "Your Last Owned Ticket Number: " + res;
	  }).catch(function(error){
		document.getElementById("last_lottery_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}

async function getLotteryMoney(){
	const lotteryNum = document.getElementById("lottery_money").value;
	const inputLottery = lotteryNum.toString();
	lottery_contract.getTotalLotteryMoneyCollected(inputLottery).then(function(res){
		document.getElementById("lottery_money_result").innerText = "Lottery has collected: " + res;
	  }).catch(function(error){
		document.getElementById("lottery_money_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function getLotteryNo(){
	const lotteryNum = document.getElementById("lottery_no").value;
	const inputLottery = lotteryNum.toString();
	lottery_contract.getTotalLotteryMoneyCollected(inputLottery).then(function(res){
		document.getElementById("lottery_no_result").innerText = "Lottery number: " + res;
	  }).catch(function(error){
		document.getElementById("lottery_no_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}

async function getBalance(){
	lottery_contract.returnBalance().then(function(res){
		document.getElementById("balance_result").innerText = "Your Balance in the Lottery: " + res;
	  }).catch(function(error){
		document.getElementById("balance_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function getTLBalance(){
	tl_contract.balanceOf(currentAccount).then(function(res){
		document.getElementById("balance_tl_result").innerText = "Your Overall TL Balance: " + res;
	  }).catch(function(error){
		document.getElementById("balance_tl_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}
async function getAllowance(){
	tl_contract.allowance(currentAccount, lotteryAdress).then(function(res){
		document.getElementById("allowance_result").innerText = "Your Allowance to the Lottery: " + res;
	  }).catch(function(error){
		document.getElementById("allowance_result").innerText = "Error! Cause: " + error.data.message;
	  }) ;
}



