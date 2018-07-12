var map = new Map();
map.set("name","tim");
map.set("age",12);
// map.forEach(function(value,key,item){
//     console.log(value);
//     console.log(key);
//     console.log(item);
// });

for(let [key,value] of map){
    console.log(key);
    console.log(value);
}

for(let [key] of map){
    console.log(key);
}

for(let [,value] of map){
    console.log(value);
}