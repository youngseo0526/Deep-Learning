var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8345"))
var myAddr0;
web3.eth.getAccounts(function(err,addr) {
    myAddr0 = addr[0];
    console.log(addr);
});
console.log("my address : " + myAddr0)
