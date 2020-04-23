import web3 from "./web3";
import socialMedia from "./build/socialMedia.json";

const instance = new web3.eth.Contract(
  socialMedia.abi,
  "Address of deployed contract"
);

export default instance;
