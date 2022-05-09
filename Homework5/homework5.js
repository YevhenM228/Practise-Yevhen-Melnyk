/* Task 1 */
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(currentObject){
    return Object.keys(currentObject).length;
}
console.log(propsCount(mentor));

/* Task 2 */
function showProps(obj){
    console.log(Object.values(obj));
    console.log(Object.keys(obj));
}
console.log(showProps({dog: "Bob", cat:"Miki"}));

/* Task 3 */

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.surname + ' ' + this.name;
    }
}
class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName){
        return super. showFullName() + ' ' + midleName;
    }
    showCourse(){
        let date = new Date();
        let currentYear = date.getFullYear();
        return currentYear = this.year;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse()); 

/* Task 4 */

const workerList = [];

class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workerList.push(this);
    }
    showSalary(){
        console.log(`${this.fullName} salary: ${this.dayRatethis * this.workingDays}`);
    }
    showSalaryWithExperince(){
        console.log(`${this.fullName} salary: ${this.dayRatethis * this.workingDays * this.#experience}`);
    }
    showSalaryWorker(){
        return `${this.dayRate * this.workingDays * this.#experience}`;
    }
    get showExp (){
        return this.#experience;
    }
    set setExp (exp){
        this.#experience = exp;
    }
    sortSalary (workersArrays){
        let sortedSalary = workersArrays.sort(function(a , b) {
            return a.showSalaryWorker() - b.showSalaryWorker();
        })
        for (let i = 0; i < sortedSalary.length; i++){
            console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWorker());
        }
    }
  
    }  
    let worker1 = new Worker("John Johnson", 20, 23);
    console.log(worker1.fullName);                 
    worker1.showSalary();
    console.log("New experience: " + worker1.showExp);
    worker1.showSalaryWithExperience();
    worker1.setExp = 1.5;
    console.log("New experience: " + worker1.showExp);
    worker1.showSalaryWithExperience();

    let worker2 = new Worker("Tom Tomson", 48, 22);
    console.log(worker2.fullName);                 
    worker2.showSalary();
    console.log("New experience: " + worker2.showExp);
    worker2.showSalaryWithExperience();
    worker2.setExp = 1.5;
    console.log("New experience: " + worker2.showExp);
    worker2.showSalaryWithExperience();

    let worker3 = new Worker("Andy Ander", 29, 23);
    console.log(worker3.fullName);                 
    worker3.showSalary();
    console.log("New experience: " + worker3.showExp);
    worker3.showSalaryWithExperience();
    worker3.setExp = 1.5;
    console.log("New experience: " + worker3.showExp);
    worker3.showSalaryWithExperience();
    
    let worker4 = new Worker("Andy2 Ander2", 19, 23)

    worker3.sortSalary(workerList);

/* Task 5 */

class GeometricFigure {
    getArea() {
    return 0;
  }
    toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Triangle extends GeometricFigure{
    constructor(b, h){
        super();
        this.base = b;
        this.height = h;
    }
    getArea(){
        return this.base * this.height / 2;
    }
}
class Square extends GeometricFigure{
    constructor(a){
        super();
        this.side = a;
    }
    getArea(){
        return this.side ** 2;
    }
}
class Circle extends GeometricFigure{
    constructor(r){
        super();
        this.radius = r;
    }
    getArea(){
        return this.radius ** 2 * Math.PI;
    }
}
function handleFigures(figures){
    return figures.reduce(function(sum , figure){
        if(figure instanceof GeometricFigure){
            console.log(`Geometric figure: ${figure.toString()} - aread: ${figure.getArea()}`);
            return sum + figure.getArea();
        }
        throw Error('Bad argument Figure');
    }, 0);
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
 console.log(handleFigures(figures));

