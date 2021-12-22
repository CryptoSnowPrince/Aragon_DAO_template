console.log("deploying ...");
const AddressBook = artifacts.require("AddressBook");

module.exports = async function(deployer, network) {
	if (network == "ropsten") {
		console.log("network is " + network);
		await deployer.deploy(AddressBook);
		console.log("======end======");
	}
	else {
		console.log("other net " + network);
	}
}