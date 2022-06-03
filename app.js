const express = require('express');
const { ethers } = require("ethers");
const app = express();
const port = process.env.PORT || 8081;

app.use(express.static('.'));

app.listen(port, () => {
  console.log("Connected!");
});

