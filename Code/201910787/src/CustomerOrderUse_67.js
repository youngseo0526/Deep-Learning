var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0x7E59431B0984F5695a21A9968590073BE89B69c7");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    await order.methods.placeOrder(accounts[0], 555, "T-Shirt", 2, 1115).send({from:accounts[0],value:1115,gas:5000000});
    await order.methods.placeOrder(accounts[1], 556, "T-Shirt", 3, 1116).send({from:accounts[1],value:1116,gas:5000000});
    await order.methods.placeOrder(accounts[2], 557, "T-Shirt", 4, 1117).send({from:accounts[2],value:1117,gas:5000000});
    order.methods.getNOrder().call().then(function(value) {console.log("Number of Order:",value);});  
    order.methods.getTotalOrderAmount().call().then(function(value) {console.log("Total Amount:",value);});
    order.methods.queryBalance().call().then(function(value) {console.log("Contract balance:",value);});
    //order.methods.updateStatus(556, "On delivery").call().then(function(value) {console.log(value[0],value[1]);});
    order.methods.getOrderById(556).call().then(function(value){console.log(value);});
}

doIt()
