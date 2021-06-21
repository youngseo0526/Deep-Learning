pragma solidity 0.6.4;
contract OrderEvent {
    address payable owner;
    event OrderLog(address indexed _from, bytes2 _itemId, uint indexed quantity, string addr);
    constructor() public {
        owner = msg.sender;
    }
    function order(bytes2 _itemId, uint quantity,string memory addr) public payable {
        if (msg.sender == owner) {
            emit OrderLog(msg.sender, _itemId, quantity,addr);
        }
    }
    modifier isOwner() { 
        if (msg.sender != owner) {
            revert();
        }
        _;
    }
    function getBalance() view public isOwner returns(uint) {
        return address(this).balance;
    }
}
