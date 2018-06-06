class Person{
    constructor(public id:string,public name:string){

    };
    Hello(name){
        console.log(name);
    };
    Say(){
        console.log(this.id);
    }
}


let p = new Person("001","tim");
console.log(p);


