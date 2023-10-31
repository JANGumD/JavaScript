const result = document.querySelector("#result");
let today = new Date()
let birthday = new Date("2001-11-04")


let passedTime = today.getTime() - birthday.getTime();
let passedDay = (Math.round(passedTime/(1000*60*60*24)))

result.innerText = passedDay;