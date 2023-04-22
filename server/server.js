const express = require("express");
const port = 1225;
const app = express();
app.use(express.json());

app.post("/greet", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(`Hello ${body.name}!`);
});

app.get("/reward", (req, res) => {
  res.send(`You earned a reward!`);
});

// app.put("greet", (req, res) => {
//   const body = req.body;
//   console.log(body);
//   res.send(`Hello ${body.name}!`);
// });

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, world!");
// });

// server.listen(port, () => {
//   console.log("Server listening on port 3000");
// });
