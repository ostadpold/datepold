import { fixNumbers } from "./fixNumbers.js";
import { getDate as persianDateToGeorgianDate } from "./PdatetoGdate.js";
import { start as calculateAge } from "./calculateAge.js";
import {calculate as GeorgianDateToPersianDate} from "./GdateToPdate.js";

let submit = document.querySelector("#submit button");
let methods = document.querySelectorAll("#method input[type=radio]");
let inputs = document.querySelectorAll("#date #inputs input");
let resultPlaceholder = document.querySelectorAll("#result span")[1];

let [first, second, third] = inputs;

submit.onclick = ()=>getMethod();
// console.log(fixNumbers("12"));
// console.log(persianDateToGeorgianDate("1386-01-26"));
// console.log(calculateAge("2002-08-19"));

let methodDetail = {
    0 : "persianToEnglish",
    1 : "EnglishToPersian",
    2 : "ageCalculation",
}
function getMethod(){
    for(let i=0;i<methods.length;i++){
        if(methods[i].checked){
            callMethod(methodDetail[i]);
            return;
        }
    }
}
function callMethod(method){
    let date = `${first.value}-${second.value}-${third.value}`;
    if(method == "persianToEnglish"){
        showResult(persianDateToGeorgianDate(date));
        return;
    }
    if(method == "EnglishToPersian"){
    (showResult(fixNumbers(GeorgianDateToPersianDate(date))));
    return;
}
if(method == "ageCalculation"){
    showResultAsAge(calculateAge(date));
    return;
}
}
function showResult(data){
    resultPlaceholder.innerHTML = data;
}

function showResultAsAge(data){
    let dataAsArray = data.split("-");
    let [year, month, day] = dataAsArray;

    resultPlaceholder.innerHTML = `<b>${year}</b><span style='display:inline-block'> years, </span><b> ${month}</b><span style='display:inline-block'> month and </span><b>${day}</b><span style='display:inline-block'> days.</span>`;
}