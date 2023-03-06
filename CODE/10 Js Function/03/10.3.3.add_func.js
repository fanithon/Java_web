function sum(num1, num2){
    let result = num1 + num2;
    console.log("inner: " + result);
}
sum(10,20);
console.log("out : " + result); // result is not defined

// add_func_return
function sum(num3, num4){
    let result = num3 + num4;
    return result;
}
const result = sum(10,20);
console.log("out : " + result);

// tuning func_return
function sum(num5,num6){
    return num5 + num6;
}
const result1 =  sum(10,20);
console.log("out : "+ result1);

// return_exit
function sum(num7,num8){
    if(typeof num7 !== "number" || typeof num8 !== "number"){
        return;
    }
    return num7 + num8;
}
let result2 = sum("a","b");
console.log("out :" + result2); // out: undefined

// return_arrow
const sum = (num9, num10) => num9 + num10;
const result3 = sum(10,20);

