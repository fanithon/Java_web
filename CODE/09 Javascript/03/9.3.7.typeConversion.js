// JS에서 내부적으로 숫자형 데이터를 문자열로 변환하여 합산
const result = 10 + "10";
console.log(result);

// StrNm을 암시적 형 변환하여 비교 가능
let num = 10;
let strNum = "10";
if(num == strNum){
    console.log(`equals`);}

// <권장사항> 명시적 형 변환 - 이름 그대로 드러나게 형 변환 처리
let num1 = 10;
let strNum1= "10";
if(String(num1) == strNum1){console.log(`equals`);}