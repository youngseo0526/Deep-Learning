var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0xF5Dd5F8e67B58950433fd4Edf8dA61D200D4b02e");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    await order.methods.ordering(accounts[0], 555, "T-Shirt", 2, 1115).send({from:accounts[0],value:1115,gas:5000000});                                              
    order.methods.getOrderById(555).call().then(function(value){console.log("Order ID:",value[0],"\nProduct:",value[1],"\nStatus:",value[2],"\nShipping addr:",value[3]);});
}

doIt()
