pragma solidity ^0.5.10;
pragma experimental ABIEncoderV2;

contract StudentTest {
    struct Student {
        uint num;
        string name;
        bool isEnrolled;
    }
    Student[] s;
    
    // (1) 입력함수
    function insert(uint n, string memory sn, bool e) public {
        s.push(Student(n, sn, e));
    }
    
    // 모든 데이터 조회
    function getAllStudents() public view returns(Student[] memory) {
        return s;
    }
    
    // (2) 2번째 데이터 제거
    function remove(uint index) public {
       s[index] = s[index+1];
       s[index+1] = s[s.length-1];
       s.length = s.length-1;
    }
   
   // (3) 배열 크기 조회
    function getLength() view public returns(uint) {
        return s.length;
    }
    
    // (4),(5) 데이터 조회
    function findBy(uint8 index) view public returns (uint, string memory, bool) {
        return (s[index].num, s[index].name, s[index].isEnrolled);
    }
}
