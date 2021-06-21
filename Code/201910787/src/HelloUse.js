var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8345"));
var shelloContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}],
                                      "0xfcc4c51129fEDaBb0e9589646345Dfe012A6861b");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
