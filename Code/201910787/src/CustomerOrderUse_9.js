var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0xE029c3188A8589F24355bC91ad275482AF0Dbe5c");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    await order.methods.addCustomer(accounts[0], 111, "kim", "010-2017-1111", "111 hongji-dong jongro-gu seoul").send({from:accounts[3],gas:5000000});
    //await order.methods.addCustomer(accounts[1], 112, "lee", "010-2017-1112", "112 hongji-dong jongro-gu seoul").send({from:accounts[3],gas:5000000});
    //await order.methods.addCustomer(accounts[2], 113, "lim", "010-2017-1113", "113 hongji-dong jongro-gu seoul").send({from:accounts[3],gas:5000000});
}

doIt()
