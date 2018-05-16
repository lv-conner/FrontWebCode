//worker
(
    function() {
        setInterval(() => {
            postMessage(new Date());
        }, 500);
    }
)()

onmessage = function(msg) {
    this.console.log(msg);
    this.console.log(JSON.stringify(msg.data));
}