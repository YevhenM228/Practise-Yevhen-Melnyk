/*Завдання 2*/
let surname = "Melnyk";
console.log(surname);

/*Завдання 3*/
let number = 1;
let mark = 'Good';
console.log(number, mark);
console.log(mark = number);

/*Завдання 4*/
const dog = {
 name: "Bob",
 age: 4,
 color: null,
 four_legs: true,
 hair:undefined
}
console.log(dog);


/*Завдання 5*/
let isAdult = confirm("Are you over 18 years old?");
console.log(isAdult);

/*Завдання 6*/
let name = "Yevhen";
let surName = "Melnyk";
let group = true;
let birthday = 2003;    

console.log(typeof birthday, birthday);
console.log(typeof group, group);
console.log(typeof name, name);

let hair;
console.log(typeof hair, hair);

let friend = null;
console.log(typeof friend, friend);

/*Завдання 7*/
let login = prompt("Login:", "login");
let email = prompt("Email:", "email");
let password = prompt("Password:","*******")
alert(`Dear ${login}, your email is ${email}, your password is ${password}`);

/*Завдання 8*/

//1
var seconsInAMinute = 60;
var minutesInAHour = 60;
var secondsInAHour = seconsInAMinute * minutesInAHour;
console.log(secondsInAHour);//Секунд в годині

//2
var hoursInADay = 24;
var secondsInADay = secondsInAHour * hoursInADay;
console.log(secondsInADay);//Секунд в добі

//3
var daysInAMonth = 31;
var secondsInAMonth = secondsInADay * daysInAMonth;
console.log(secondsInAMonth);//Секунд в місяці
