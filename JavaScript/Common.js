String.prototype.format = function() {
    var str = this;
    for (let index = 0; index < arguments.length; index++) {
        var reg = new RegExp("({)" + index + "(})", "g");
        str = str.replace(reg, arguments[index])
    }
    return str;
}


var str = "Tim";

console.log(str.format("1", "234"));

var strTempalte = "{0}{1}{2}{3}{3}{4}{4}";

var r = strTempalte.format("tim", "Hello", "good", "fan", "sd");
console.log(r);


String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof(args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}