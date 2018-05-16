var el = document.getElementById("time");
var woker = new Worker("woker.js");
woker.postMessage("Hello")
woker.onmessage = function(msg) {
    el.innerText = msg.data;
};
woker.onerror = function(state) {
    console.log(state);
}

// setTimeout(() => {
//     woker.terminate();
//     woker = undefined;
// }, 10000);