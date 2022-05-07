// Task1
// let newWindow = window.open("","", "width = 300 , height = 300");
// setTimeout (function(){
//     newWindow.resizeTo(500, 500);
// },2000);
// setTimeout (function(){
//     newWindow.moveTo(200, 200);
// },4000);
// setTimeout (function(){
//     newWindow.close;
// },6000);

// //Task2
// function changeCSS(){
//     text.style.color = "orange";
//     text.style.fontSize = "20pt";
//     text.style.fontFamily = "Comic Sans MS";
// }

// Task3

// function setBackgroundColor(color){
//     document.body.style.backgroundColor = color;
// }

// // Task4
// myBtn.addEventListener("click", deleteColor);

// function deleteColor(){
//     let k = document.getElementById("nameSet");
//     k.remove(k.selectedIndex);
// }

// Task5

// let k = document.getElementById('liveButton');
//     k.addEventListener('mouseover', mouseOver);
//     k.addEventListener('mouseout', mouseOut);
//     k.addEventListener('click', click);

// function mouseOver() {
//     document.getElementById('myId').innerHTML += "Mouse on me <br>";
// }
// function mouseOut() {
//     document.getElementById('myId').innerHTML += "Mouse is not on me <br>";
// }
// function click() {
//     document.getElementById('myId').innerHTML += "I was pressed <br>";
// }

//Task6
// function displayWindow(){
//     let w = window.innerWidth;
//     let h = window.innerHeight;
    
//     let size = "Width: " + w + "Height: " + h;
//     document.getElementById("result").innerHTML = size;
// }
// window.addEventListener("resize", displayWindow);

//Task7

const arrCity = {
    'ger': ["Berlin" , "Dortmund", "Frankfurt"],
    'usa': ["New York" , "Washinghton", "Los Angeles"],
    'ukr': ["Lviv" , "Kyiv", "Mariupol"]
}

let select = document.getElementById('country');
select.addEventListener = ('change', createList);
select.addEventListener = ('change', toParagraph);

let select_city = document.getElementById('cities');
select_city.addEventListener = ('change', toParagraph);

function createList(){
    select_city.innerHTML = '';
    let selected_country = elect.value;
    for (let i = 0; i < arrCity[selected_country].length; i++){
        let new_option = document.createElement('option');
        new_option.innerHTML = arrCity[selected_country][i];
        select_city.appendChild(new_option);
    }
}

let paragraph = document.querySelector('p');
function toParagraph(){
    paragraph.innerHTML = '';
    paragraph.innerHTML = select.options[select.selectedIndex].text + ', '
    +select_city.options[select_city.selectedIndex].text;
}
