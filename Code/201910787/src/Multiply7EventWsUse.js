var Web3=require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8345"));
var _abiArray=[{"constant":false,"inputs":[{"name":"input","type":"uint256"}],"name":"multiply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"Print","type":"event"}];
var _test = new web3.eth.Contract(_abiArray, '0x707783Ee72D68B416718b96FFDe7A0C1F4EdE877');
var event = _test.events.Print({fromBlock: 0}, function (error, result) {
    if (!error) {
        console.log("Event fired: " + JSON.stringify(result) + "\n---> " + JSON.stringify(result.returnValues));
    }
});

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    const value8 = await _test.methods.multiply(8)
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
    console.log("---> multiply(8) called "+ JSON.stringify(value8.events.Print.returnValues));
    
    const value16 = await _test.methods.multiply(16)
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
    console.log("---> multiply(16) called "+ JSON.stringify(value16.events.Print.returnValues));
}
doIt()
