var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider('http://localhost:8445'));
web3.eth.getAccounts(console.log);
web3.eth.getCoinbase(console.log);
web3.eth.getBalance('0xe1e222f7567794c4813f2965719f59c15e8a7a84').then(console.log)
