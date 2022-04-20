const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();
app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.get("/*", function(request, response){
  response.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`App is listening of port: ${port}`)