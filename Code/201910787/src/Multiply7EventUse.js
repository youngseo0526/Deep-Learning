var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var _abiArray = [{"constant":false,"inputs":[{"name":"param4","type":"uint256"}],"name":"multiply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"param1","type":"address"},{"indexed":false,"name":"param2","type":"uint256"},{"indexed":false,"name":"param3","type":"uint256"}],"name":"Print","type":"event"}];
var _test = new web3.eth.Contract(_abiArray, '0x7D3e0409FBf69cd115FA1bd4F34FAc246e19Fe39');
var event = _test.events.Print({fromBlock: 0}, function (error, result) {
    if (!error) {
        console.log("Event fired: " + JSON.stringify(result) + "\n---> " + JSON.stringify(result.returnValues));
    }
});

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    const value8 = await _test.methods.multiply(8)
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
    console.log("\n-------7 multiply by 8--------");
    console.log(value8.events.Print.returnValues);
    console.log("address:",value8.events.Print.returnValues[0]);
    console.log("timestamp:",value8.events.Print.returnValues[1]);
    console.log("result:",value8.events.Print.returnValues[2]);
    
    console.log("\n-------7 multiply by 16--------");
    const value16 = await _test.methods.multiply(16)
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
    console.log(value16.events.Print.returnValues);
    console.log("address:",value16.events.Print.returnValues[0]);
    console.log("timestamp:",value16.events.Print.returnValues[1]);
    console.log("result:",value16.events.Print.returnValues[2]);
}
doIt()
