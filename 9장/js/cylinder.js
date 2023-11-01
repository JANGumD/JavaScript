// 생성자 함수 만들기
// function Cylinder (cylinderdiameter,cylinderheight){
//     this.diameter = cylinderdiameter;
//     this.height = cylinderheight;

//     this.getVolume = function(){
//         let radius = this.diameter/2;
//         return(Math.PI *radius*radius*this.height).toFixed(2);
//     };
// }

// class 만들기
class Cylinder{
    constructor(cylinderdiameter,cylinderheight){
        this.diameter = cylinderdiameter;
        this.height = cylinderheight;
    }
    getVolume(){
        let radius = this.diameter/2;
        return(Math.PI *radius*radius*this.height).toFixed(2);
    }
}


// 버튼 가져오기
const button = document.querySelector("button");
// 결과 표시 영역 가져오기
const result = document.querySelector("#result");
// 버튼을 누르면 입력한 지름과 높이를 가지고 생성자 호출
button.addEventListener("click",function(e){
    e.preventDefault();
    // 지름 값 가져오기
    const diameter = document.querySelector("#cyl-diameter").value;
    // 높이 값 가져오기
    const height = document.querySelector("#cyl-height").value;
    // 빈칸인지 아닌지 체크
    if(diameter===""||height===""){
        result.innerText = `지름과 높이 값을 모두 입력하시오.`
    }
    
    else{
        // 객체 생성
        let cylinder = new Cylinder(parseInt(diameter),parseInt(height));
        // 계산 결과 result에 출력
        result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}이다.`;
    }
});
