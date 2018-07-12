var  p =function(){
	var arr = Array.from(arguments);
	arr.forEach(function(value,key){console.log(value);console.log(key)});
}

p(1,2,3,4,4,5,5,5);



[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}) // 10