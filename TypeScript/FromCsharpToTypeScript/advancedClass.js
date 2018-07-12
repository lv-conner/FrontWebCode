var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.talk = function () {
        return "\u4E00\u4E2A\u4EBA";
    };
    return Person;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        return '汪汪汪';
    };
    return Dog;
}());
function extend(first, second) {
    var result = {};
    for (var _i = 0, _a = Object.getOwnPropertyNames(Object.getPrototypeOf(first)); _i < _a.length; _i++) {
        var func = _a[_i];
        result[func] = first[func];
    }
    for (var _b = 0, _c = Object.getOwnPropertyNames(Object.getPrototypeOf(second)); _b < _c.length; _b++) {
        var func = _c[_b];
        result[func] = second[func];
    }
    return result;
}
var personDog = extend(new Person(), new Dog());
console.info(personDog.talk());
console.info(personDog.bark());
