let xhr = new XMLHttpRequest();
let url = "https://reqres.in/api/products/10"
xhr.open("GET",url);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let info = JSON.parse(xhr.responseText);
        document.querySelector("#result").innerHTML=`
            <ul>
            <p>상품명 : ${info.data.name}</p>
            <p>생산년도 : ${info.data.year}</p>
            </ul>`;
    }
}