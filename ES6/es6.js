/**
 * Let 用于声明变量，适用于声明局部变量（只在声明中的代码块有效）
 * 
 */

function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        debugger;
      yield a;
      [a, b] = [b, a + b];
    }
  }

  var [first, second, third, fourth, fifth, sixth] = fibs();