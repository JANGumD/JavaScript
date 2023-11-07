class Pet{
    //프로퍼티 생성
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    // 메서드 만들기 
    // funtion 안씀
    run(){
        document.write(`<h1>${this.color} ${this.name}가 달린다.</h1>`);
    }
}

const pet1 = new Pet("동글이","흰색");
pet1.run();

class Cat extends Pet{
    constructor(name,color,breed){
        super(name,color);
        this.breed =  breed;
    }
    viewInfo(){
        document.write(`<hr><h1>이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}</h1>`);
    }
}

const pet2 = new Cat("이잼민","흰색","코숏");
pet2.viewInfo();
pet2.run();
