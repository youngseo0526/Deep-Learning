var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8345"));
var shelloContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}]);
var hello = shelloContract.at("0x16a5f5C2fACF05d0BB807E429Eb3ed9F91f14a2e");
console.log(hello.sayHello.call());
