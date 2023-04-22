const axios = require("axios");
const serverUrl = "http://localhost:1225";

async function main() {
  // sending post request
  const greeting = await axios.post(`${serverUrl}/greet`, { name: "Shubham" });
  //   console.log(greeting.data);
  console.log("greeting from the server : " + JSON.stringify(greeting.data));

  const reward = await axios.get(`${serverUrl}/reward`);
  console.log(reward.data);
}

main().catch((error) => {
  console.log(error);
  process.exit(-1);
});
