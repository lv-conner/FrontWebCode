var event = require("events");
var emitter = new event.EventEmitter();
emitter.on('helloEvent', function(arg1, arg2) {
    console.log("hellods", arg1, arg2);
});

emitter.emit("helloEvent", "Tim", "lv");