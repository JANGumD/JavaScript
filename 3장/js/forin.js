const student = {
    major : "컴퓨터공학부",
    idNum : 202295031,
    name : "장소윤"
}

for(key in student){
    document.write(`${key} : ${student[key]}<br>`)
}