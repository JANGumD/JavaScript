const button = document.querySelector("button");
const result = document.querySelector("#result");
let input = document.querySelector("#user-number");
button.addEventListener("click",()=>{
    let inputNum = document.querySelector("#user-number").value;
    try{
        if(parseInt(inputNum)<10){
            result.innerText = inputNum;
        }
        else if(parseInt(inputNum)>=10){
            throw new Error("10보다 작은 수를 입력하세요.");
        }
        else if(inputNum===""||isNaN(inputNum)){
            throw new Error("숫자를 입력하세요.");
        }
    }catch(error){
        alert(error);
    }finally{
        input.value="";
    }
})

