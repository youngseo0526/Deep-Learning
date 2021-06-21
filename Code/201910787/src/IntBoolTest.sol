pragma solidity  ^0.5.10;

contract IntBoolTest {
    bool married = true;
    uint256 xAge = 22;
    uint256 YAge = 25;
    //fixed phi = 3.14;
    
    function update() public {
        xAge = YAge;
        YAge = 33;
    }
    
    function setXAge(int age) public {
        xAge = uint (age); //converstion
    }
    
    function getXAge() public view returns(uint) {
        return xAge;
    }
    
    function getYAge() public view returns(uint) {
        return YAge;
    }
    
    function testInt() public view returns(bool) {
        assert(xAge>=20 && YAge>=20);
        return true;
    }
    
    function isMarried() public view returns(bool) {
        return married;
    }
}
