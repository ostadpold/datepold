function clockrunner(){

    let myDisplay = document.querySelector('span');
    let nowDate = new Date();

    let hour = nowDate.getHours();
    let minute = nowDate.getMinutes();
    let second = nowDate.getSeconds();
    let point;

    if(hour > 12) {
        hour -= 12;
        point = "PM";
    }else {
        point = "AM";
    }
    if(hour < 10 ){
        hour = "0" + hour;
    }
    if(minute < 10 ){
        minute = "0" + minute; 
    }
    if(second < 10) {
        second = "0" + second;
    }

    let Clock = hour + ":" + minute + ":" + second ;

    myDisplay.innerHTML = Clock + " " +point;

    setTimeout(clockrunner,1000);
}

clockrunner();