// id가 open인 (프로필보기) 버튼 가져오기
const open = document.querySelector("#open");

// id가 modalBox인 영역 가져오기
const modalBox = document.querySelector("#modal-box");

// modalBox인 영역에 있는 id가 close인 버튼 가져오기
const close = document.querySelector("#close");

open.addEventListener("click",() =>{
    modalBox.classList.toggle("active");    // 프로필보기 버튼 클릭하면 .active 스타일로 토글
})

close.addEventListener("click",() =>{
    modalBox.classList.toggle("active");   // My Profile의 x버튼 클릭하면, 이전상태로 돌아가기
})