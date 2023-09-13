require("dotenv").config();
const config = require('./config');
const app = require("./src/app");

const port = parseInt(config.development.server.appPort ?? "5000", 10);

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port} 👍🏻`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });