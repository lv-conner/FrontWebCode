var events = require("events");
var enventEmitter = new events.EventEmitter();
enventEmitter.on("Hello", function(sender, arg) {
    console.log(sender);
    console.log(arg);
});

enventEmitter.on("say", function(say) {
    say();
});
enventEmitter.addListener("god", function(name) {
    console.log("god" + name);
});
enventEmitter.addListener("god", function(name) {
    console.log("god2" + name);
});
enventEmitter.addListener("error", function(error) {
    console.log("catch error");
});

enventEmitter.emit("Hello", "tim", "myarg");
enventEmitter.emit("say", function() { console.log("Chinese"); });
enventEmitter.emit("say", function() {
    console.log("english");
});
enventEmitter.emit("god", "tim");
enventEmitter.emit("error");


var eventEmitter2 = new events.EventEmitter();

eventEmitter2.on("connected",function(sender,args){
    console.log(sender);
    console.log(args);
});
eventEmitter2.emit("connected","tim","connected");
