// 숫자 1부터 999까지 짝수가 몇 개인지 출력하는 코드를 작성
let count = 0;
for(let i =1; i <= 999; i++){
    if(i % 2== 0) count++;
}
console.log(`짝수의 개수는 ${count}개입니다.`)

// 구구단 1단부터 9단까지 한 번에 출력하는 코드를 작성
for(let dan = 1; dan <=9; dan++){
    for(let num = 1; num <=9; num++){
        console.log(`${dan} * ${num} = ${dan *num}`)
    }
}

// 100부터 999까지 정수 중에서 암스트롱 수에 해당하는 숫자를
// 모두 출력하는 코드를 작성하세요.

for(let i = 1; i < 10; i++){
    for(let k = 0; k < 10; k++){
      for(let j = 0; j < 10; j++){
        let sum = (i * i * i) + (k * k * k) + (j * j * j);
        let currentNumber = (i * 100) + (k * 10) + j; 
        if(sum === currentNumber){
          console.log(currentNumber);
        }
      }
    }
  } 