var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0x7E59431B0984F5695a21A9968590073BE89B69c7");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account1: " + accounts[0]);
    const balanceAcc1 = await web3.eth.getBalance(accounts[0]);
    console.log("Balance of Account1: " + balanceAcc1);
    console.log("\n");
    console.log("Account2: " + accounts[1]);
    const balanceAcc2 = await web3.eth.getBalance(accounts[1]);
    console.log("Balance of Account2: " + balanceAcc2);
    console.log("\n");
    console.log("Account3: " + accounts[2]);
    const balanceAcc3 = await web3.eth.getBalance(accounts[2]);
    console.log("Balance of Account3: " + balanceAcc3);
    console.log("\n");
    console.log("Block number: " + web3.eth.getBlockNumber().then(console.log));
}

doIt()
