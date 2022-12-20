


window.addEventListener("beforeunload", function (e) {
    // var confirmationMessage = "\o/";
    let inputs = document.querySelectorAll("#date #inputs input");
    let resultPlaceholder = document.querySelectorAll("#result span")[1];
    let [first, second, third] = inputs;

    this.localStorage.setItem("year",first.value);
    this.localStorage.setItem("month",second.value);
    this.localStorage.setItem("day",third.value);
    this.localStorage.setItem("result",resultPlaceholder.innerHTML);


    // (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    // return confirmationMessage;                            //Webkit, Safari, Chrome
  });