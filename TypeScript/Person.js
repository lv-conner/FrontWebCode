var Person = /** @class */ (function() {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    };
    Person.prototype.Hello = function(name) {
        console.log(name);
    };;
    Person.prototype.Say = function() {
        console.log(this.id);
    };
    return Person;
}());
var p = new Person("001", "tim");
console.log(p);




// OK, because of structural typing
p = new Person();