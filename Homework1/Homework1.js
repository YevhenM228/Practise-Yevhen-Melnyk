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
let group = "Lv-678";
let birthday = 2003;    
const is_married = false;
let hair;
let friend = null;
console.log(typeof birthday, birthday);
console.log(typeof is_married, married);
console.log(typeof name, name);
console.log(typeof group, group);
console.log(typeof hair, hair);
console.log(typeof friend, friend);

/*Завдання 7*/
let login = prompt("Login:", "login");
let email = prompt("Email:", "useremail@mail.com");
let password = prompt("Password:","password");
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
