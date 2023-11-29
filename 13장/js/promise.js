// Promise 객체 만들기 (제작 코드)
let likePizza = false;
const pizza = new Promise((resolve, reject)=>{
    if(likePizza){
        resolve('피자를 주문합니다.');
    }
    else{
        reject('피자를 주문하지 않습니다.');
    }
});

// Promise 객체 사용하기 (소비 코드)
pizza
    .then(
        result=>console.log(result)
    )
    .catch(
        err=>console.log(err)
    )//;세미콜론 주의하기(마지막줄에만 사용)
    .finally(
        ()=>console.log('완료')
    );