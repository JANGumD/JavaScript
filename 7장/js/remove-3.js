// span 전부 가져오기
// p > span 도 가능

const buttons = document.querySelectorAll("p>span");

for(let btn of buttons){
    btn.addEventListener("click",function(){
        // 해당 요소가 있는 내용 삭제

        // x를 누르면 x와 내용이 모두 삭제되어야 함
        this.parentNode.remove();
        
    })
}

