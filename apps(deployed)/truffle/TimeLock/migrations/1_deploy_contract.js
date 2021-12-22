console.log("deploying ...");
const TimeLock = artifacts.require("TimeLock");

module.exports = async function(deployer, network) {
	if (network == "ropsten") {
		console.log("network is " + network);
		await deployer.deploy(TimeLock);
		console.log("======end======");
	}
	else {
		console.log("other net " + network);
	}
}