// 버튼 가져오기
const button = document.querySelector("body>button");
// 버튼을 클릭하면
button.addEventListener("click",()=>{
    // p요소 만들기
    let newP = document.createElement("p")
    // 텍스트 노드 만들기
    let textNode = document.createTextNode("안녕하세요")
    // 기준 노드 지정하기
    let basicNode = document.querySelectorAll("p")[2]
    // p의 자식으로 텍스트 추가하기 (열결)
    newP.appendChild(textNode)
    // 기준 노드 앞에 추가하기
    document.body.insertBefore(newP,basicNode)
},{once : true});