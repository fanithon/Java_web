// string_pw_length
const pw = '124';
if(pw.length < 4 ){
    console.log("비밀번호는 최소 4자리 이상 입력해주세요.");
}

// string_include
const email = "test!naver.com";
if(email.includes("@") == false){
    console.log("올바른 이메일 형식이 아닙니다.");
}

// string_indexOf
// indexOf() 메서드는 특정 문자열과 일치하는 첫 번째 문자의 인덱스 반환
// 찾지 못할 경우 ' -1 ' 반환
const email1 = "test@naver.com";
if(email1.indexOf("@") === -1){
  console.log("올바른 이메일 형식이 아닙니다.");
}