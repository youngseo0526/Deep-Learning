console.log('...mining start');
var sender = eth.coinbase;
var receiver = eth.accounts[1];
var t = eth.sendTransaction({from:eth.coinbase, to:eth.accounts[1], value:web3.toWei(0.00000000000010101,"ether")});
console.log(t);
console.log('mining done...');
