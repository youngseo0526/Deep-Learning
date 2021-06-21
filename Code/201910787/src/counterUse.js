var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var abi =[{"constant":false,"inputs":[{"name":"input","type":"uint256"}],"name":"PowerOf2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getResult","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var addr = "0x09EaCEB69b175216961609C316193440318BC734";
var mul = new web3.eth.Contract(abi,addr);
mul.methods.powerOf2(8).call().then(function(str) {console.log(str);});
mul.methods.powerOf2(32).call().then(function(str) {console.log(str);});
