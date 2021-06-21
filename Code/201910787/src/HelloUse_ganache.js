var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8345"));
var shelloContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}],
                                      "0xe1E685D172ecfc46f2070C5B02FcE13Ea4e61a65");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
