// 아이디가 title인 요소 와서 title 변수에 저장.
const title = document.querySelector("#title")

title.onclick = () => {
    title.classList.toggle("clicked")
}



// title.onclick = () => {
//     // clicked 스타일이 적용되지 않았다면 스타일 추가
//     if(title.classList.contains("clicked")){
//         title.classList.add("clicked");
//     }
//     // clicked 스타일이 적용되어 있으면 스타일 제거
//     else{
//         title.classList.remove("clicked");
//     }
// }