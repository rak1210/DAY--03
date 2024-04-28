//How to compare two JSON have the same properties without order?


var obj1 = {name: "siva", age: 24};
var obj2 = {age : 24 , name: "siva"};

var flag=true;

if(Object.keys(obj1).length == Object.keys(obj2).length){
    for(key in obj1){ 
        if(obj1[key] == obj2[key]){
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+ " "+flag);