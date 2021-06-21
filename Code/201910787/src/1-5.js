console.log('-After');
console.log('  -coinbase balance in ether:'web3.fromWei(coinbase,"ether"));
console.log('  -account1 balance in ether:',web3.fromWei(ac2,"ether"));
var afterBal = eth.getBalance(eth.accounts[1]);
var afterBal = web3.fromWei(afterBal,"ether");
var beforeBal = 492.76000000000008

//console.log('Balance of sender(ether): ', web3.fromWei(eth.getBalance(eth.coinbase),"ether"));
//console.log('Balance of receiver(ether): ', afterBal);
//console.log('Receiver balance change(ether): ', (afterBal-beforeBal));
//console.log('Block number: ', eth.blockNumber);
