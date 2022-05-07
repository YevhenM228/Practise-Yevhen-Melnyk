//Task1
function upperCase(str){
    regexp = /^[A-Z]/;
    if(regexp.test(str)){
        console.log("String's not starts with uppercase character");
    }else{     
        console.log("String's starts with uppercase character");
    }
}
upperCase('regexp');
upperCase('RegExp');

//Task2

function checkEmail(data){
    const regExp = /\S+@\S+\.\S+/;
    console.log(regExp.test(data));
}
checkEmail("Qmail2@.gmail.com");

// Task3

const register = /d(b+)(d)/i;
const array = register.exec("cdbBdbsbz");
console.log(array);

// Task4
const rep = /(\w+)\s(\w+)/;
const str = "Java Script";
const newStr = str.replace(rep, "$2 $1");
console.log(newStr);

// Task5

function checkCard(str){
    const reg = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const result = reg.test(str);
    if(result){
        console.log("Validation successful");
    }else{
        console.log("Please, try again")
    }
}
checkCard(9999-9999-9999-9999);

//Task 6
function checkEmail (str)
{
  let regexEmail = /^[a-zA-Z0-9]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (str.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

//Task7 
  function checkLogin(e) {
    const reg = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    const regNumber = /[0-9\.]+/g;
    const resultNumber = e.match(regNumber);
    const result = reg.test(e);
    console.log(`${e} is ${result} - ${resultNumber}`);
  }
checkLogin('ee1.1ret3');
