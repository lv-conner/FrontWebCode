var config = require("./module/configmodule")
var express = require("express");
var hello = require("myModule");

var myModule = require("myModule");

console.log(JSON.stringify(config.data));
console.log(JSON.stringify(hello));
console.log(module);