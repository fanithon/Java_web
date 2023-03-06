// math/random
const random = Math.random();
console.log(random); // Math의 random은 0 이상 1 미만의 난수 반환

// math/getMaxRandom
// 정수 생성 필요 시
// 정수를 반환하는 floor()메서드를 추가해 난수의 범위를 늘릴 수 있음

function getMaxRandom(max){
    return Math.floor(Math.random() * max) +1 ;
}
const maxRandom = getMaxRandom(20);
console.log(maxRandom);

// math/getMinMaxRandom
function getMinMaxRandom(min, max){
    return Math.floor(Math.random() * (max - min)) +1 + min;
} // 20을 제외하고 싶으면 + 1 삭제
const minmaxRandom = getMinMaxRandom(10,20);
console.log(minmaxRandom);

const arr = [10, 120, 30, 50, 20];
arr.sort(function(a, b){
  if(a < b) return 1; 
  else if(a > b) return -1;
  else return 0;
})
console.log(arr[0]);