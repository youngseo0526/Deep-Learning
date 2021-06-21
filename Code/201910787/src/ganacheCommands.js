var Web3=require('web3');
var web3=new Web3('http://127.0.0.1:8345');
web3.eth.getAccounts(console.log);
web3.eth.getCoinbase(console.log);
web3.eth.getBalance('0x2288C4706d8D4663F55D1A9fDedB85280eB3b711').then(console.log);
