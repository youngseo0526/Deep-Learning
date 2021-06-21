pragma solidity 0.6.4;

contract Customer {
    struct CustomerInfo {
        uint id;
        string name;
        string phoneNum;
        string destination;
        bool isCustomer;
    }
    mapping (address => CustomerInfo) customerMap;
    mapping (address => CustomerInfo) customerId;
    function addCustomer(address addr, uint _id, string memory _name, string memory _ph, string memory _home) public {
        if (customerMap[addr].isCustomer == false) {
            CustomerInfo memory c = CustomerInfo(_id, _name, _ph, _home, true);
            customerMap[addr] = c;
            customerId[addr] = c;
        }
    }
    function getHomeAddress(address addr) view public returns (string memory) {
        CustomerInfo memory c = customerMap[addr];
        return c.destination;
    }
    function getId(address addr) view public returns (uint) {
        CustomerInfo memory c = customerMap[addr];
        return c.id;
    }
}

contract Order {
    address payable owner;
    Customer customer;
    constructor() public { 
        customer = new Customer();
        owner = msg.sender;
    }
    struct OrderInfo {
        uint oid;
        string oname;
        uint256 timestamp;
    }
    mapping (address => OrderInfo) orderMap;
    mapping (uint => address) addressById;
    mapping (address => string) orderStatus;
    mapping (address => uint) orderQuantity;
    mapping (address => uint) orderAmount;
    mapping (address => bool) isOrdered;
    uint accAmount;
    uint accOrderNum;
    function placeOrder(address payable addr, uint _oid, string memory _oname, uint _n, uint _amount) public payable {
        OrderInfo memory o = OrderInfo(_oid, _oname, now);
        orderMap[addr] = o;
        addressById[_oid] = addr;
        orderStatus[addr] = "Ordered";
        orderQuantity[addr] =_n;
        orderAmount[addr] = _amount;
        isOrdered[addr] = true;
        accAmount += _amount;
        accOrderNum ++;
    }
    function addCustomer(address addr, uint _id, string memory _name, string memory _ph, string memory _home) public {
        customer.addCustomer(addr, _id, _name, _ph, _home);
    }
    function getHomeAddress(address _addr) public view returns(string memory) {
        return customer.getHomeAddress(_addr);
    }
    function getStatus(address _addr) public view returns(string memory) {
       // OrderInfo memory o = orderMap[_addr];
        return orderStatus[_addr];
    }
    function updateStatus(uint _id, string memory _s) public {
        orderStatus[addressById[_id]] = _s;
    }
    function getOrderItem(address _addr) view public returns (uint, string memory, string memory, string memory) {
        OrderInfo memory o = orderMap[_addr];
        return (o.oid, o.oname, orderStatus[_addr], customer.getHomeAddress(_addr));
    }
    function getOrderById(uint _id) view public returns (uint, string memory, string memory, string memory) {
        OrderInfo memory order = orderMap[addressById[_id]];
        return (order.oid, order.oname, orderStatus[addressById[_id]], customer.getHomeAddress(addressById[_id]));
    }
    function getNOrder() public view returns (uint) {
        return accOrderNum;
    }
    function getTotalOrderAmount() public view returns (uint) {
        return accAmount;
    }
    function queryBalance() public view returns (uint) {
        return address(this).balance;
    }
    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }
    
    //function getInfo() public view returns(uint, uint, uint) {
    //    return (accOrderNum, accAmount, address(this).balance);
    //}
}
