window.onload = function() {
    var context = GetCanvas("Canvas1");
    context.moveTo(100, 100);
    context.lineTo(600, 600);
    context.lineTo(300, 800);
    context.lineTo(100, 100);
    context.lineWidth = 5;
    context.strokeStyle = "#AA394C";
    context.stroke();

    console.log(context);
}

function writeCircle(context) {
    debugger;
}


function GetCanvas(id) {
    var canvas = document.getElementById(id);
    canvas.height = 800;
    canvas.width = 600;
    if (canvas) {
        var context = canvas.getContext("2d");
        return context;
    } else {
        throw "specify id is not exists!";
    }
}


function writeLine(context, startx, starty, endx, endy) {
    context.moveTo(startx, starty);
    context.lineTo(endx, endy);
    context.lineWidth = 5;
    context.strokeStyle = "#AA394C";
    context.stroke();
}