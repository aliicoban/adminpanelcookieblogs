const express = require('express');
const serveStatic = require("serve-static")

const path = express();
app.use("/", serveStatic(path.join(__dirname,"/dist")));

const port = process.env  || 8080
app.listen(port)
console.log("Listening port:", port);