const ENSDeployer = artifacts.require("ENSDeployer");

module.exports = async function (deployer, network, accounts) {
  // deployment steps
  await deployer.deploy(ENSDeployer);
};