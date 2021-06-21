var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8345'))
web3.eth.getBalance("0xa3633B857283F0266163e0D58eCdED8f67c257AC").then(function(wei) {
    console.log("balance in Wei :" + wei);
});
web3.eth.getBalance("0xa3633B857283F0266163e0D58eCdED8f67c257AC").then(function(wei) {
    var eth = web3.utils.fromWei(wei, 'ether');
    console.log("balance in ETH: " + eth);
});
web3.eth.getBalance("0xa3633B857283F0266163e0D58eCdED8f67c257AC", function(error,wei) {
    if (!error) {
        var bal = web3.utils.fromWei(wei, 'ether');
        console.log("Balance in ETH/KRW: "+ bal*2689000 + " won");
    }
});
//var bal = web3.eth.getBalance('0x2288C4706d8D4663F55D1A9fDedB85280eB3b711').then(web3.utils.fromWei).then(console.log);
//console.log("Balance in ETH/KRW: ", bal*2689000);
