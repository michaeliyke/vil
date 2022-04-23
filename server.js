const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
require("./config");
// const connection = require("./db");
const { log } = require("./logging");

const app = express();
app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.get("/*", (request, response) => {
  response.sendFile(path.join(__dirname, "/dist/index.html"));
});

if (!process.env.PORT) {
  log("ERROR: PORT port not found");
  process.exit(1);
}

const port = process.env.PORT;
app.listen(port);
log(`App is listening of port: ${port}`);
