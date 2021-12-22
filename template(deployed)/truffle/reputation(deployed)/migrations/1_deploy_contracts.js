console.log("deploying ...");
const ReputationTemplate = artifacts.require("ReputationTemplate");
const _daoFactory = "0xfCB46ECD10cb31B4A73bB23508966A3Fcd17d2Bf";
const _ens = "0x7B270C0A889248eC1F42feE2E32D48095470f71c";
const _miniMeFactory = "0xE6724f0E63FA73ACa69eF0c26C9ac2F10A42B7F7";
const _aragonID = "0xc0e3E830694a721DB3f038c121b419370D53057E";

module.exports = async function(deployer, network) {
	if (network == "ropsten") {
		console.log("network is " + network);
		await deployer.deploy(ReputationTemplate, _daoFactory, _ens, _miniMeFactory, _aragonID);
		console.log("======end======");
	}
	else {
		console.log("other net " + network);
	}
}