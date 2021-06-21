console.log(JSON.stringify(admin.nodeInfo));
if (eth.chainId() == 36) {
    console.log('\n Your chainId',eth.chainId(),'@127.0.0.1 is a private network');
}
