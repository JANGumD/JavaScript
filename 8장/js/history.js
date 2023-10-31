// 버튼 가져오기
const back_btn = document.querySelector("#back");
const for_btn = document.querySelector("#forward");

// 버튼을 클릭하면
back_btn.addEventListener("click",()=>{
    history.go(-1);
})

for_btn.addEventListener("click",()=>{
    history.go(1);
})
