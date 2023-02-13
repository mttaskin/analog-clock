let hours = document.querySelector(".hours");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");


setInterval(() =>{
let newHours = new Date().getHours();
let newMinute = new Date().getMinutes();
let newSecond = new Date().getSeconds();

second.style.transform = `rotate(${newSecond*6}deg)`
minute.style.transform = `rotate(${newMinute*6}deg)`
hours.style.transform = `rotate(${newHours*30+newMinute*0.5}deg)`
},1000);

