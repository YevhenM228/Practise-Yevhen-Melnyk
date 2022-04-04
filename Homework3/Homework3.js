/* Task1 */
let result = 1;
let numbers = [2,3,4,5];
for (i = 0 ; i < numbers.length; i++)  {
    result = result * numbers[i];
}
console.log(result);

/* Task2 */
for (k = 0; k >= 0 && k <= 15; k++){
    if (k % 2 === 0) {
    console.log(k + " is even");
}else {
    console.log(k + " is odd");
}
}

/* Task3 */
function randArray(k){
    const arr = [];
    for (i = 0; i < k; i++){
        arr[i] = Math.floor(Math.random() * 500) + 1;
    }
    console.log(arr);
}
randArray(5);

/* Task4 */
function raiseToDegree(a,b){
    let res = a;
    for ( let i = 1; i < b; i++){
        res *= a;
    }
    return res;
}

let a = +prompt("Enter a: ");
let b = +prompt("Enter b: ");

if ( Number.isInteger(a) && Number.isInteger(b)){
    console.log( raiseToDegree (a , b));
}else {
    console.log( "Incorrect value", "Use integer numbers" );
}

/* Task5 */

function findMin(){
    let min = arguments[0];
    for ( k = 0; k < arguments.length; k++){
            if (arguments[k] < min ){
                min = arguments[k];
            }
    }
    return min;
}
findMin(12, 14, 4, -4, 0.2);

/* Task6 */

function findUnique(arr){
    for (let i = 0 ; i < arr.length; i++){
        for ( let k = (i + 1); k < arr.length; k++){
            if(arr[i] === arr[k]){
                return false;
            }
        }
    }
    return true;
}
findUnique([1, 2, 3, 5, 3]);  

/* Task7 */

function lastItem(arr, number){
    if (number == null){
        console.log(arr.pop());
    }
    else{
        console.log(arr.slice(-number));
    }
}
console.log(lastElem([3, 4, 10, -5]));

/* Task8 */

function bigLetter (str){
    const arr1 = str.split(' ');
    const newarr = [];
    for (i = 0; i < arr1.length; i++){
        newarr.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));

    }
    return newarr.join(' ');
}
console.log(bigLetter("i love java script"));
