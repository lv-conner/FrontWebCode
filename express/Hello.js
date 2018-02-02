var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("hello");
});
app.route("/events").all(function(req, res, next) {
    res.send("God")
});
app.route("/Home").get(function(req, res, next) {
    res.send("Home");
});
app.route("/Home/Index").get(function(req, res, next) {
    req.job = "tim";
    next();
});
app.route("/Home/Index").get(function(req, res, next) {
    var job = req.job;
    res.send("send" + job);
    next();
})
app.listen(8900);