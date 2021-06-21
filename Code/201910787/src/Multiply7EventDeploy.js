var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var _abiArray = [{"constant":false,"inputs":[{"name":"param4","type":"uint256"}],"name":"multiply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"param1","type":"address"},{"indexed":false,"name":"param2","type":"uint256"},{"indexed":false,"name":"param3","type":"uint256"}],"name":"Print","type":"event"}];
var _bin = "0x" + "6080604052348015600f57600080fd5b506101078061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c6888fa114602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b7f91da4985ab616136202f4e81fd2d8cac1eb12591132d609cece407f7c6fb9205334260078402604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a15056fea2646970667358221220c3a1e698054ce36595e82193f1be63ca61faaead1a9fbe551de26d6ccfed367a64736f6c63430006040033";
async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 1000000}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()
