pragma solidity ^0.5.10;

contract EnumTest {
    enum Day {MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY}
    Day myDay = Day.FRIDAY; //index int4
    
    /* @return Day  returning index*/
    function getMyDay() public view returns(Day) {
        return myDay;   //index
    }
    /* @param d  ok to pass an integer (uint8)
    function setMyDay(Day d) public {
        myDay = d;
    }
    //uint is converted to uint8, which is default
    function setMyDayInt(uint d) public {
        myDay = Day(d);
    }
}
