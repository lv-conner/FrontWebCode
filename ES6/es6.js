/**
 * Let 用于声明变量，适用于声明局部变量（只在声明中的代码块有效）
 * Const用于声明常量，一旦声明后就不可以其值就不可以改变。
 * 
 */
{
  let a = 10;
}

//console.log(a);//ReferenceError:
const b = 20;
//b = 200;    //TypeError: Assignment to constant variable.
//全局变量global
//console.log(global);
//变量解构赋值：
var [aa,bb,cc] = [1,2,3,4];
console.log(aa);
console.log(bb);

function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  var [first, second, third, fourth, fifth, sixth] = fibs();

  
