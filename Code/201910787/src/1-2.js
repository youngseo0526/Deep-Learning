var ac1=eth.getBalance(eth.coinbase)
var ac2=eth.getBalance(eth.accounts[1])
console.log('-Before');
console.log('  -coinbase balance in Wei:',ac1,' ether:',web3.fromWei(ac1,"ether"));
console.log('  -account1 balance in Wei:',ac2,' ether:',web3.fromWei(ac2,"ether"));
console.log('  -transaction count: ', web3.eth.getTransactionCount(eth.accounts[0]));
