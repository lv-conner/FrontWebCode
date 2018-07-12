class User{
    constructor(name: string, pwd: string){
        this.name = name;
        this.pwd = pwd;
    }

    name: string;
    private pwd: string;

    checkLogin(): boolean{
        return this.name === 'brook' && this.pwd === '123';
    }
}

var u1 = new User("tim","1234");
console.log(u1);