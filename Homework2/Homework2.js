/***********Task1***********/
let x = 1;
let y = 2;

let res1 = " " + x + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + "" + y; ;;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"
let res3 = y > x;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseFloat(Boolean(x));/// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

/***********Task2***********/
let number = prompt("Ввести число:");
if (number % 2 === 0 && number > 0){
    console.log("Число є парне");
}else if (number % 7 === 0) {
    console.log("Число є кратне семи");
}else console.log("Це число не підходить");


/***********Task3***********/
const arr = [];
arr.push (10, "Number", true, null);
console.log(arr.length);
arr[4] = prompt("Choose a value");
console.log(arr[4]);
arr.shift();
console.log(arr);

/***********Task4***********/
let cities = ["Rome", "Lviv", "Warsaw"]; 
cities = cities.join (" * ");
console.log(cities);

/***********Task5***********/
let isAdult = prompt ("Are you adult ?");
if (isAdult >= 18) {
    console.log("You are adult");
}else if (isAdult < 18){
    console.log("You are too young");
}

/***********Task6***********/

let a = prompt("Введіть сторону a:");
let b = prompt("Введіть сторону b:");
let c = prompt("Введіть сторону c:");

if (a > 0 && b > 0 && c > 0){
    let square = 0.5 * (a*b)
    console.log("Площа трикутника: " + square);
}else{
    alert("Неправильні дані");
}
if ((a*a + b*b === c*c) ||  (a*a + c*c === b*b) || (c*c + b*b === a*a) ) {
      console.log("Трикутник прямокутний");
}else {
     console.log("Трикутник не є прямокутний");
}

/***********Task7***********/

let date = new Date();
let currentHour = date.getHours();

if (currentHour >= 23 || currentHour <= 5){
    alert("Good night!");
}else if (currentHour > 5 && currentHour <= 11){
    alert("Good morning!");
}else if (currentHour > 11 && currentHour <= 17){
    alert("Good day!");
}else if (currentHour > 17 && currentHour < 23){
    alert("Good evening");
}


