pragma solidity 0.6.4;
contract BankTransfer {
    address payable owner;
    uint balance;
    uint increment;
    
    constructor() public {
        balance = address(this).balance;
    }
    function setOwner(address payable _owner) public {
        owner = _owner;
    }
    function deposit(uint amount) public payable {
        require(msg.value == amount);
        balance += amount;
    }
    function withdrawAll() public {
        increment = balance;
        owner.transfer(balance);
    }
    function getBalance() public view returns(uint, uint) {
        return(address(this).balance, balance);
    }
    function forwardTo(address payable _receiver) public payable {
        uint amount = 333;
        increment = amount;
        balance -= amount;
        _receiver.transfer(333);
    }
    function incrementAmount() public view returns(uint) {
        return increment;
    }
}
