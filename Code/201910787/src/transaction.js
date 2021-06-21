var Web3=require('web3');
var web3=new Web3('http://127.0.0.1:8345');
web3.eth.sendTransaction({from:"0xa3633B857283F0266163e0D58eCdED8f67c257AC",
                          to:"0xe1e222f7567794c4813f2965719f59c15e8a7a84",
                         value:(web3.utils.toWei('1','ether'))});
