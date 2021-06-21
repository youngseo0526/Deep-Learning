var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
}
var _abiArray=[{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"subtract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var _bin="60806040526000805534801561001457600080fd5b5060d2806100236000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80634f2be91f1460415780636deebae31460495780638ada066e146051575b600080fd5b6047606d565b005b604f6080565b005b60576094565b6040518082815260200191505060405180910390f35b6000808154809291906001019190505550565b600080815480929190600190039190505550565b6000805490509056fea265627a7a72305820508846ce94a16d4b8972f1a989905b97641a2556d2d6eaa52090e31a1254015b64736f6c634300050a0032";
var _contract = web3.eth.contract(_abiArray);
//unlock the account with a password provided
//web3.personal.unlockAccount(web3.eth.accounts[0],'password');
var _instance=_contract.new({data:"0x"+_bin,from:web3.eth.accounts[0],gas:100000}, function(err, contract) {
    if (!err) {
        console.log("contractAddress: ", contract.address);
        console.log("transactionHash: ", contract.transactionHash);
    }
});
