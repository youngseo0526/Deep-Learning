pragma solidity 0.5.10;

contract Hello {
    function sayHello() pure public returns(string memory) { // pure : read-only
        return "Hello, Snowman";
    }
}
