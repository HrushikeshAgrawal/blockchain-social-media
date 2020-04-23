const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Delete existing build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// Get the contract source code and compile it
const contractPath = path.resolve(__dirname, "contracts", "socialMedia.sol");
const source = fs.readFileSync(contractPath, "utf8");
var input = {
  language: "Solidity",
  sources: {
    "socialMedia.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts;

// Make build folder
fs.ensureDirSync(buildPath);

// For each contract, make a json file in build folder
for (let contractFileName in output) {
  const contractName = contractFileName.replace(".sol", "");
  console.log("Writing: ", contractName + ".json");
  fs.outputJsonSync(
    path.resolve(buildPath, contractName + ".json"),
    output[contractFileName][contractName]
  );
}
