// const Kernel = artifacts.require("Kernel");
// const EVMScriptRegistryFactory = artifacts.require("EVMScriptRegistryFactory");
const DAOFactory = artifacts.require("DAOFactory");
// const ACL = artifacts.require("ACL");
const _baseKernel = "0x8C5BE7E729B7CA993404CF7E571De15c6499BEC0";
const _regFactory = "0xfe9489Cd6eB55C8d2AB656290b0141C45c995c1A";
const _baseACL = "0xba7270e4e7fb83fF83f57fea3b87c87f16a8Ce07";

// module.exports = function (deployer) {
//   deployer.deploy(Kernel);
// };

// module.exports = function (deployer) {
//   const _baseACL = deployer.deploy(ACL)
//     .then(() => {
//       console.log("++++_baseACL = " + _baseACL + "-----");
//       // const result = deployer.deploy(DAOFactory, _baseKernel, _baseACL, _regFactory)
//       //   .then(() => {
//       //     console.log("end, result " + result + "------");
//       //   });      
//     });
// };


module.exports = function (deployer) {
  const result = deployer.deploy(DAOFactory, _baseKernel, _baseACL, _regFactory)
    .then(() => {
      console.log("++++result = " + result + "-----");
    });
};
