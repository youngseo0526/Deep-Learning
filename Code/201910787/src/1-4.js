var ac1=eth.getBalance(eth.coinbase);
var ac2=eth.getBalance(eth.accounts[1]);
var afterBal = 2893.48249999999727273;
console.log('-After');
console.log('  -coinbase balance in ether:',web3.fromWei(ac1,"ether"));
console.log('  -account1 balance in ether:',web3.fromWei(ac2,"ether"),
            'increasde by',web3.fromWei(ac1,"ether")-web3.fromWei(ac2,"ether"));
console.log('  -transaction count: ', web3.eth.getTransactionCount(eth.accounts[0]),'increased by 1');
console.log('  -gas used:',web3.fromWei(ac1,"ether")-afterBal,
            'won (1 ether = 2500000):',0.000000000000021*2500000);
