var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8446"));
var abi = [{"constant":true,"inputs":[{"name":"input","type":"uint256"}],"name":"powerOf2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var addr = "0x7b2786Bb89b7B27357Cb594218c19B94F62C3F52";
var mul = new web3.eth.Contract(abi,addr);
mul.methods.powerOf2(8).call().then(function(str) {console.log(str);});
mul.methods.powerOf2(32).call().then(function(str) {console.log(str);});
