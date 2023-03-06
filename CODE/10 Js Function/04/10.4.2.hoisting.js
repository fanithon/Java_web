console.log(num); // undefined 출력
var num = 10; // 선언부를 스코프 최상위로 끌어올림

// hosting_function
printHello();
function printHello(){
    console.log('Hello');
}

// explain hosting
// function printHello(){ // 함수 선언문 최상위로 끌어올림
//     console.log("Hello");
// }
// printHello();

// hoisting_express
printHello();
var printHello = function printHello(){
    console.log("Hello");
}

var printHello;
printHello();
printHello = function printHello(){ 
  console.log("Hello");
}