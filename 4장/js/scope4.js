const factor = 5;

function calc(){
    return num*factor;
}

{   // 변수 num은 대괄호 안 블럭에서만 사용가능한 지역변수이다.
    const num = 10;
    let result = calc();
    console.log(`result : ${result}`);
}
