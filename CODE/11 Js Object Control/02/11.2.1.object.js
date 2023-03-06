const person = {
    name:{
        firstName:"Gildong",
        lastName: "Hong"
    },
    age:20,
    likes:["apple","samsung"],
    printHello:function(){
        return "hello";
    }
};
console.log(person["name"]);

// person 객체의 name 속성에 값으로 할당된 객체의 firstName 속성에 접근
console.log(person["name"]["firstName"]);
console.log(person["likes"]);
console.log(person["likes"][0]);
console.log(person["likes"][1]);
console.log(person["printHello"]());

// 마침표 연산자 object_dot

console.log(person.likes[0]);