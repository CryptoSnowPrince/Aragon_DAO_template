// const deployTemplate = require('@aragon/templates-shared/scripts/deploy-template')

// const TEMPLATE_NAME = 'company-template'
// const CONTRACT_NAME = 'CompanyTemplate'

// module.exports = callback => {
//   deployTemplate(web3, artifacts, TEMPLATE_NAME, CONTRACT_NAME)
//     .then(template => {
//       console.log(template.address)
//       callback()
//     })
//     .catch(callback)
// }

console.log("deploying....");
const CompanyTemplate = artifacts.require("CompanyTemplate");
const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory");
const FIFSResolvingRegistrar = artifacts.require("FIFSResolvingRegistrar");
const PublicResolver = artifacts.require("PublicResolver");
const _daoFactory = "0xfCB46ECD10cb31B4A73bB23508966A3Fcd17d2Bf";
const _ens = "0x7B270C0A889248eC1F42feE2E32D48095470f71c";

const namehash = require('eth-ens-namehash');

function getRootNodeFromTLD(tld) {
  return {
    namehash: namehash.hash(tld),
  };
}

// module.exports = function (deployer) {
//   var tld = 'eth';
//   var _node = getRootNodeFromTLD(tld);
//   const _miniMeFactory = deployer.deploy(MiniMeTokenFactory)
//     .then(() => {
//       console.log("MiniMeTokenFactory deployed");
//       const _defaultResolver = deployer.deploy(PublicResolver, _ens)
//         .then(() => {
//           console.log("PublicResolver deployed");
//           const _aragonID = deployer.deploy(FIFSResolvingRegistrar, _ens, _defaultResolver.address, _node.namehash)
//             .then(() => {
//               console.log("FIFSResolvingRegistrar deployed");
//               deployer.deploy(CompanyTemplate, _daoFactory, _ens, _miniMeFactory.address, _aragonID.address)
//                 .then(() => {
//                   console.log("======end======");
//                 });  
//             });
//         });
//     });
// };


module.exports = async function (deployer, network) {
  if (network == "ropsten") {
    console.log(network);
    var tld = 'eth';
    var _node = getRootNodeFromTLD(tld);
    console.log(_node.namehash);
    const _miniMeFactory = "0xE6724f0E63FA73ACa69eF0c26C9ac2F10A42B7F7";
    // await deployer.deploy(MiniMeTokenFactory);
    // console.log("MiniMeTokenFactory deployed " + _miniMeFactory);
    const _defaultResolver = "0xc90c2C1B11327dB5D2dA677F08739Ccd99311d8a";
    // await deployer.deploy(PublicResolver, _ens);
    // console.log("PublicResolver deployed " + _defaultResolver.address);
    const _aragonID = "0xc0e3E830694a721DB3f038c121b419370D53057E";
    // const _aragonID = await deployer.deploy(FIFSResolvingRegistrar, _ens, _defaultResolver, _node.namehash);
    // console.log("FIFSResolvingRegistrar deployed " + _aragonID.address);
    await deployer.deploy(CompanyTemplate, _daoFactory, _ens, _miniMeFactory, _aragonID);
    console.log("======end======");
  }
  else {
    console.log("other net " + network);
  }
};