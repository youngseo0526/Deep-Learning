pragma solidity ^0.5.10;

contract ByteStringTest {
    byte b = 0xFF;
    bytes1 b1 = 0xFF;
    bytes2 b2 = 0xFFAA;
    bytes place8 = "7 hongji";
    bytes23 place23 = "7 hongji-dong jonro-gu";
    bytes place = "7 hongji-dong jonro-gu Seoul";
    bytes myBytes = new bytes(3); //0x000000
    string constant name = "kys";
    
    function getB1() public view returns(byte) {
        return b1;  //byte, so no casting required
    }
    function getB2() public view returns(bytes2) {
        return b2;
    }
    function getB23() public view returns(bytes23) {
        return place23;  //fixed size, value type (no memory)
    }
    /**@return hex bytes. reference type should be set as memory*/
    function getBytes() public view returns(bytes memory) {
        return myBytes;  //smu in hex 0x736d75
    }
    function getLengOfBytes23 () view public returns(uint) {
        return place23.length;  // returns 23
    }
    function getLenOfBytes() pure public returns(uint) {
        bytes memory bm = "7 hongji-dong jongro-gu";
        return bm.length;        // returns 23
    }
     function setB2(bytes2 _b2) public {
        b2=_b2;
    }
    function setBytes() public {
        myBytes="smu";
    }
    function getLenOfString() pure public returns(uint) {
        string memory nameLocal="jslLocal";
        //return nameLocal.length;  //error, casting required
        return bytes(nameLocal).length;
    }
    function getString() pure public returns(string memory) {
        string memory s = "한글";
        //bytes memory b4 = "한글";  //ok. bytes is a ref type, so memory used
        return s;
    }
}
