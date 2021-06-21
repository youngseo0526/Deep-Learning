var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var abi = [{"constant":true,"inputs":[{"name":"input","type":"uint256"}],"name":"powerOf2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var addr = "0x2FaC54e3931538f70e1892D38A4b6F8f1fAF9A68";
var mul = new web3.eth.Contract(abi,addr);
mul.methods.powerOf2(8).call().then(function(str) {console.log(str);});
mul.methods.powerOf2(32).call().then(function(str) {console.log(str);});
