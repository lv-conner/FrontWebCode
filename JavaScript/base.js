var promise = new Promise(function(resolve,reject){
    var sum = 0;
    for (let index = 0; index < 100000; index++) {
        
        sum +=index;
    }
});


function generateArrar(m,n){
    //return Array.from({length:m},_=>n);
    var arr = new Array(m);
    arr.fill(n);
    return arr;
}

var arr = generateArrar(10,10);
console.log(arr);