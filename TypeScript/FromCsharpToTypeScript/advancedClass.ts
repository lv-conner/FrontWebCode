class Person {

    talk(): string {
        return `一个人`;
    }
}

class Dog {

    bark(): string {
        return '汪汪汪';
    }
}

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let func of Object.getOwnPropertyNames(Object.getPrototypeOf(first))) {
        (<any>result)[func] = (<any>first)[func];
    }
    for (let func of Object.getOwnPropertyNames(Object.getPrototypeOf(second))) {
        (<any>result)[func] = (<any>second)[func];
    }
    return result;
}

let personDog = extend(new Person(), new Dog());
console.info(personDog.talk());
console.info(personDog.bark());