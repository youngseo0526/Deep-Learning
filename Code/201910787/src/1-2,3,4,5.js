console.log('1-2');
var ac1=eth.getBalance(eth.coinbase)
var ac2=eth.getBalance(eth.accounts[1])
console.log('-Before');
console.log('  -coinbase balance in Wei:',ac1,' ether:',web3.fromWei(ac1,"ether"));
console.log('  -account1 balance in Wei:',ac2,' ether:',web3.fromWei(ac2,"ether"));
console.log('  -transaction count: ', web3.eth.getTransactionCount(eth.accounts[0])-1);

console.log('\n1-3');
console.log('...mining start');
var t = eth.sendTransaction({from:eth.coinbase, to:eth.accounts[1], value:web3.toWei(0.00000000000010101,"ether")});
console.log(t);
console.log('mining done...');

console.log('\n1-4');
//var bal = eth.getBalance(eth.coinbase) - 0.00000000000010101;
    //   console.log("Balance in ETH/KRW: "+ bal+ " won");
console.log('-After');
console.log('  -coinbase balance in ether:',eth.getBalance(eth.coinbase));
console.log('  -account1 balance in ether:',web3.fromWei(ac2,"ether"));
console.log('  -transaction count: ', web3.eth.getTransactionCount(eth.accounts[0]), 'increase by 1');
console.log('  -gas used:', val* 2500000);
