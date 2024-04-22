let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let today = new Date();


let allMonth = ["УА","БА","ЖК","ЧК","БУГУ","КУЛЖ","ТЕКЕ","БО","АО","ТА","ЖА","БА"]
let weekday = ["Дуйш","Шейш","Шарш","Бейш","Жума","Ишемби","Жекш"]

date.innerHTML = today.getDate();
day.innerHTML = weekday[today.getDay()];
month.innerHTML = allMonth[today.getMonth()];
yaer.innerHTML = today.getFullYear();



