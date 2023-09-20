// 1~전달 받은 수까지 합계를 계산하는 함수
// 함수 선언
//              매개변수
function mul(num1,num2){
    let result = num1 * num2;
    return result;
    //return num1 * num2;
}

// 사용자로부터 정수 업력 받기
let num1 = parseInt(prompt("첫번째 정수 입력"));
let num2 = parseInt(prompt("두번째 정수 입력"));

// 입력 받은 수를 인수로 함수 호출                 인수
document.write(`<h1>${num1} * ${num2} = ${mul(num1,num2)}</h1>`);
