//string extension
String.prototype.format = function() {
    var str = this;
    for (let index = 0; index < arguments.length; index++) {
        var reg = new RegExp("({)" + index + "(})", "g");
        str = str.replace(reg, arguments[index])
    }
    return str;
}