var Web3=require('web3');
var web3=new Web3('http://127.0.0.1:8345');
web3.eth.getBalance('0xa3633B857283F0266163e0D58eCdED8f67c257AC').then(console.log);
