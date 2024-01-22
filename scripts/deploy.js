async function main() {
	const BatchDeposit = await ethers.getContractFactory("BatchDeposit");
 
	// Start deployment, returning a promise that resolves to a contract object
	const BatchDeposit_resp = await BatchDeposit.deploy();
	console.log("Contract deployed to address:", BatchDeposit_resp.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
	 console.error(error);
	 process.exit(1);
   });