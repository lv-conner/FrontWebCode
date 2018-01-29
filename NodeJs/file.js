var fs = require("fs");
// import { fs } from "fs";
var data = fs.readFileSync("node.js");
console.log(data.toString());
fs.readFile("node.js", function(error, data) {
    if (error) {
        console.log(error.toString());
        return;
    } else {
        console.log(data.toString());
    }
})