// var Migrations = artifacts.require("./Migrations.sol");
// var MyFirstContract = artifacts.require('./MyFirstContract.sol');
// var Courses = artifacts.require('./Courses.sol');
// var Voting = artifacts.require('./Voting.sol');
var Proof = artifacts.require('./Proof.sol');

module.exports = function(deployer) {
  // deployer.deploy(Migrations);
  // deployer.deploy(MyFirstContract);
  // deployer.deploy(Voting, ['Osi', 'Nora', 'John']);
  // deployer.deploy(Courses);
  deployer.deploy(Proof);
};
