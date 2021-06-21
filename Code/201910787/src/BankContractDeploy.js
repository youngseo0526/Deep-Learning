var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}
var _abiArray=[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"incrementAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var _bin="608060405234801561001057600080fd5b503073ffffffffffffffffffffffffffffffffffffffff16316001819055506103388061003e6000396000f3fe6080604052600436106100555760003560e01c806312065fe01461005a57806313af40351461008c57806327d8ad88146100dd578063853828b614610121578063a4a049dd14610138578063b6b55f2514610163575b600080fd5b34801561006657600080fd5b5061006f610191565b604051808381526020018281526020019250505060405180910390f35b34801561009857600080fd5b506100db600480360360208110156100af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101b7565b005b61011f600480360360208110156100f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101fa565b005b34801561012d57600080fd5b50610136610265565b005b34801561014457600080fd5b5061014d6102da565b6040518082815260200191505060405180910390f35b61018f6004803603602081101561017957600080fd5b81019080803590602001909291905050506102e4565b005b6000803073ffffffffffffffffffffffffffffffffffffffff1631600154915091509091565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061014d905080600281905550806001600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc61014d9081150290604051600060405180830381858888f19350505050158015610260573d6000803e3d6000fd5b505050565b6001546002819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6001549081150290604051600060405180830381858888f193505050501580156102d7573d6000803e3d6000fd5b50565b6000600254905090565b8034146102f057600080fd5b806001600082825401925050819055505056fea265627a7a72305820b690963924b7d2b207cd81a5a961f2bd7e4b4159dd7079dd082e6f6d36e9e00064736f6c634300050a0032";
var _contract = new web3.eth.Contract(_abiArray);
//unlock the account with a password provided
//web3.personal.unlockAccount(web3.eth.accounts[0],'password');
_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0x6C4fcb32299A76C6f3025C3BD64170d9457B3ec8", gas: 364124, gasPrice: '100000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
