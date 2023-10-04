// 아이디가 title인 요소 와서 title 변수에 저장.
const title = document.querySelector("#title")

// title 을 누르면(click)하면 클래스 이름이 clicked인 것을 추가하라.
title.onclick = () => {
    title.classList.add("clicked");
}