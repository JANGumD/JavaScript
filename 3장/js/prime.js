// 소수 판단 스크립트
// 정수를 입력 받는다. 프롬프트
// 소수는 1을 제외한 자기 자신으로 나누어 떨어지는 수이다.
// 나누어 떨어진다 = 나머지가 0이다.

// 정수 입력받기
let num = parseInt(prompt("정수 입력"));
// 변수 flag 0으로 선언
let flag = 0;
// 입력받은 수를 2부터 입력받은 수 전까지 1씩 증가하면서 나눠본다
for(let i = 2; i<num;i++){
    // 나눠지는 수가 있다면 소수가 아니므로 
    // 소수가 아니라는 뜻으로 flag에 숫자 1을 넣는다
    // 소수가 아닙니다 출력
    // 이후 반복문을 나온다
    if(num%i==0){
        flag = 1;
        document.write(`입력받은 수 ${num}은(는) 소수가 아닙니다.<br>`)
        break;
    }
}
// 소수가 아니라면 flag에 숫자 1 소수라면 처음 선언한 0이 들어가게 된다
// 따라서 flag에 숫자 0이 들어있는 경우 
// 소수입니다 출력
if(flag == 0){
    document.write(`입력받은 수 ${num}은(는) 소수입니다.<br>`)
}

/*
let i;
for(i = 2; i<num;i++){
    if(num%i==0){
        break;
    }
}
if(num === i){
    document.write(`입력받은 수 ${num}은(는) 소수입니다.<br>`)
}
else{
    document.write(`입력받은 수 ${num}은(는) 소수가 아닙니다.<br>`)
}
*/
