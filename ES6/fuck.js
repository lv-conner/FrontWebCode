function Person(name){
    this.name=name;
    //console.log(this);
}

var p = new Person("tim");


console.log(JSON.stringify(p));
var p1 = {};

Person.apply(p1,["tim lv"]);

console.log(JSON.stringify(p1));




