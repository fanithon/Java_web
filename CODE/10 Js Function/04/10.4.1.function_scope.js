// 1 - global socpe : 전역 스코프는 스코프와 상관없이 모두 참조
let a = 10; // Global Scope
function sum(){
    console.log(`함수 내부 : ${a}`);
}
sum();
console.log(`함수 외부 : ${a}`);

// 2 -  local scope : 지역 스코프는 함수 내에서만 참조
function sum(){
    let b = 10; // local scope
    console.log(`함수 내부 : ${b}`);
}
sum();
console.log(`함수 외부 : ${b}`);
// Out : ReferenceError : b is not defined 

// 3 - Block Scope : left와 const로 선언한 변수에 한해서만 적용
let c = 10;
{
    let d = 20;
    console.log(`코드 블록 내부 c : ${c}`);
    console.log(`코드 블록 내부 d : ${d}`);
}
console.log(`코드 블록 외부 c : ${c}`);
console.log(`코드 블록 외부 d : ${d}`); // Out: ReferenceError: d is not defined

// 3-1 - Block Sope 2 
var aa = 10;
{
    var bb = 20;
    console.log(`코드 블록 내부 aa: ${aa}`);
    console.log(`코드 블록 내부 bb: ${bb}`);
}
console.log(`코드 블록 외부 aa: ${aa}`);
console.log(`코드 블록 외부 bb: ${bb}`);
// var 키워드는 함수는 전역 스코프에서 선언한 것과 마찬가지

// 4 - Reference ( 참조 우선순위 )
let cc = 10;
const dd = 20;
function sum(){
    let cc = 50;
    const dd = 70;
    console.log(`함수 내부 cc: ${cc}`);
    console.log(`함수 내부 dd: ${dd}`);
}
sum();
// 같은 지역 스코프의 식별자를 참조하고 없을 경우 전역에서부터 불러옴
