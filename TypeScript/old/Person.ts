class Person{
    constructor(public id:string,public name:string,private my:number){

    };
    Hello(name){
        console.log(name);
    };
    Say(){
        console.log(this.id);
    }
}

class Student extends Person{
    
}


let p = new Person("001","tim",2);
console.log(p);


