//枚举类型
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green";
    color[color["yello"] = 4] = "yello";
})(color || (color = {}));
