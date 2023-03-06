// 객체 리터럴을 반복할 경우 ( for_in_obj )
let obj = {name:'철수', age:'20'};
for(let key in obj){
    console.log(key +":" + obj[key]);
}

// 배열을 반복할 경우 ( for_in_arr )
let arr = ["orange","banana","apple"];
for(let index in arr){
    console.log(index + ": " + arr[index]);
}
//  배열의 순서대로 접근하는 것을 보장하지 않으므로 코드 작성시 주의

