var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0xbb0FbfE722C32400dDE34671556eff9A1a73AC6b");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    await order.methods.ordering(accounts[0], 555, "T-Shirt", 2, 1115).send({from:accounts[0],value:1115,gas:5000000});
    await order.methods.ordering(accounts[1], 556, "T-Shirt", 3, 1116).send({from:accounts[1],value:1116,gas:5000000});
    await order.methods.ordering(accounts[2], 557, "T-Shirt", 4, 1117).send({from:accounts[2],value:1117,gas:5000000});
   order.methods.getInfo().call().then(function(value) {console.log("Number of Order:",value[0],"\nTotal Amount:",value[1],"\nContract balance:",value[2]);});                                                       
}

doIt()
