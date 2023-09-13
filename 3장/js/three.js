// 1. 정수를 입력받는다
// 2. 만약 정수가 3의 배수이면
//  1) 3의 배수입니다. 출력
// 3. 아니면
//  1) 3의 배수가 아닙니다. 출력

let num = parseInt(prompt("정수 입력"))
if (num%3==0){
    alert(num + "은(는) 3의 배수입니다")
}
else{
    alert(num + "은(는) 3의 배수가 아닙니다")
}

/*
let number = prompt("정수 입력")

if(number != null){
    number = parseInt(number)
    if (num%3==0){
        alert(num + "은(는) 3의 배수입니다")
    }
    else{
        alert(num + "은(는) 3의 배수가 아닙니다")
    }
}
else{
    alert("입력이 취소되었습니다.")
}
*/