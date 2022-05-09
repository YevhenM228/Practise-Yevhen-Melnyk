/* Task1 */ 
function calcRectangleArea(width, height){
    if(isNaN(width) && isNaN(height)){
        throw "Значення не є числовим"
    }
    return width * height;
}
try {
    calcRectangleArea(3 , 6);
} catch (error) {
    console.log(error);
}
/* Task2 */ 
function checkAge(){
    try{
        const age = prompt("Цей фільм дозволено переглядати людям віком від 14 років. Введіть будь-ласка ваш вік: ")
        if (age == "")
            throw new Error ("Це поле порожнє. Введіть свій вік ще раз")
        else if(age <= 14) 
             throw new Error ("Вибач, але ти ще не маєш 14 років і тобі заборонено перглядати фільм")
        else if(isNaN(parseInt(age))) 
            throw new Error ("Введіть числове значення")
        
        alert("Вітаємо! Ти отримав доступ до фільму")
    }
    catch(exception){
        alert(exception.name + " " +exception.message)
    }
}
checkAge();0

/* Task3 */
class MonthException{
    constructor(message){
        this.name = 'MathException';
        this.message = message;
    }
}
function showMonthName(month){
    month = month - 1;
    let months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if(months[month] !== undefined){
        return months[month];
    }
    else{
        throw new MonthException('incorrect month number');
    }
}
try{
    let myMonth = 9;
    let monthName = showMonthName(myMonth);
    console.log(monthName);
}
catch(exception){
    console.error(eexception.name, exception.message);
}

/* Task4 */
function showUser(id){
    if(id < 0) {
        throw new Error('ID немає бути від`ємним'+ id)
    }
    return {id: id}
}
function showUsers(ids){
    let result = [];
    ids.forEach(function (id) {
        try{
            let person = showUser(id);
            result.push(person);
        }catch (e){
            console.log(e.message);
        }
    });
    return result;
}
showUser([7, -12, 44, 22]);
