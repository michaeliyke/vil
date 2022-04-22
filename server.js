const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const connection = require("./db");
const {log} = require("./logging");

const app = express();
app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.get("/*", function(request, response){
  response.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT;
app.listen(port);
log(`App is listening of port: ${port}`, connection.end());