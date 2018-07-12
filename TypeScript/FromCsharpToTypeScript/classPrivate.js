var User = /** @class */ (function () {
    function User(name, pwd) {
        this.name = name;
        this.pwd = pwd;
    }
    User.prototype.checkLogin = function () {
        return this.name === 'brook' && this.pwd === '123';
    };
    return User;
}());
var u1 = new User("tim", "1234");
console.log(u1);
