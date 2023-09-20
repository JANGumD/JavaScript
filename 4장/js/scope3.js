// 이론 - 스코프(실행결과 예상)

// var hi = "hello";

// function change(){
//     hi = "bye"; // 함수 안에서 전역변수 값 수정 가능
// }

// console.log(hi); // hello
// change();
// console.log(hi); // bye

var hi = "hello";

function change(){
    var hi = "bye"; // 지역변수, 이 함수에서만 사용 가능 
}

console.log(hi); // hello
change();
console.log(hi); // hello