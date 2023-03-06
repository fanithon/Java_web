// break문
// 종료 조건을 만족하지 않아도 인위적으로 반복문 종료

for(let i =0; i <10 ; i++){
    console.log(i);
    if (i == 5) break;
}

// for_break_ex.js
let obj = {name:"철수", age:20};
for(let key in obj){
    if(key == "age") break;
    console.log(obj[key]);
}