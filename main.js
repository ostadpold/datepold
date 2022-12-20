let inputs = document.querySelectorAll("#date #inputs input");
let methods = document.querySelectorAll("#method input[type=radio]");
let resultPlaceholder = document.querySelectorAll("#result span")[1];

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    let metaTheme = document.querySelector("head meta[name='theme-color']");
    metaTheme.content = "rgb(30 41 59)";
}

let [first, second, third] = inputs;

function lastData(){
    if(localStorage.getItem("year") !== undefined){
        first.value = localStorage.getItem("year");
    }
    if(localStorage.getItem("month") !== undefined){
        second.value = localStorage.getItem("month");
    }
    if(localStorage.getItem("day") !== undefined){
        third.value = localStorage.getItem("day");
    }
    if(localStorage.getItem("result") !== undefined){
        resultPlaceholder.innerHTML = localStorage.getItem("result");
    }
}
lastData();
// if(first.value.length < 4){
first.focus();
// }


function validInput(event){
    let today = new Date();
    if(first == event.target){
        if(today.getFullYear() - Number(event.target.value) < 0){
            invalidDateInput(event);
        }
        if(event.target.value.length >= 4){
            second.focus();
        }
    }//year

    if(second == event.target){
        if(Number(event.target.value) > 12){
            invalidDateInput(event);
        }
        if(localStorage.getItem("month") == ""){
            console.log(localStorage.getItem("month") !== "");
            second.focus();
            return;
        }
        if(event.target.value.length >= 2){
            console.log(event.target.value.length >= 2);
            third.focus();
        }
    }//month

    if(third == event.target){
        if(Number(event.target.value) > 31){
            invalidDateInput(event);
        }
        if(event.target.value.length >= 2){
            third.blur();
        }
    }//month
}
function invalidDateInput(event){
    alert(`${event.target.value} is invalid`);
    event.target.value = "";
}

