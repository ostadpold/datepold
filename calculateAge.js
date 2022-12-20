const daysInMonth = [
    0,
    31,
    28,
    31,
    30,//4
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
]

export function start(dateString){
    try {//getting started ( starting )
        let today = new Date();

        var YEAR;
        var MONTH;
        var DAY;
    
        var thisYear = today.getFullYear(),
            thisMonth = today.getMonth() + 1,//javascript date object has problem with month
            thisDay = today.getDay();
    
        let dateArray = dateString.split("-");
    
        var userYear = Number(dateArray[0]),
            userMonth = Number(dateArray[1]),
            userDay = Number(dateArray[2]);
        
    }catch(err){
        console.log("ERROR on starting");
        console.log(err);
    }

    try {//getting day ( day )

        DAY = thisDay - userDay;
        if(DAY < 0){
            thisMonth--;
            let daysOnMonth = daysInMonth[thisMonth];
            DAY += daysOnMonth;
        }
        // console.log("DAY calculated:");
        // console.log("DAY:", DAY);

    }catch(err){
        console.log("ERROR on getting day");
        console.log(err);
    }

    try {//getting month ( month )

        let thisMonthAsDay = 0;
        let userMonthAsDay = 0;

        for(let i=12;i > 0;i--){
            if(i <= thisMonth){
                thisMonthAsDay += daysInMonth[i];
            }
            if(i <= userMonth){
                userMonthAsDay += daysInMonth[i];
            }
        }
        let MONTHasDay = thisMonthAsDay - userMonthAsDay;
        if(MONTHasDay < 0){
            MONTHasDay += 365;
            thisYear--;
        }
        // console.log("MONTHasDay calculated:");
        // console.log(MONTHasDay);

        MONTH;
        let remainingDayOfMonth;
        for(let i=0;i<=12;i++){
            MONTHasDay -= daysInMonth[i];
            if(MONTHasDay < 0){
                MONTHasDay += daysInMonth[i];
                MONTH = i-1;
                remainingDayOfMonth = MONTHasDay;
                break;
            }
        }
        DAY += remainingDayOfMonth;
        // console.log("MONTH calculated:");
        // console.log(MONTH);
        // console.log("remaining of MONTH calculated:");
        // console.log(remainingDayOfMonth);
        // console.log("DAY changed:");
        // console.log(DAY);

    }catch(err){
        console.log("ERROR on getting month");
        console.log(err);
    }

    try {//getting YEAR and RETURN data

        YEAR = thisYear - userYear;
        YEAR = String(YEAR);
        MONTH = String(MONTH);
        DAY = String(DAY);
        if(MONTH.length < 2){
            MONTH = "0"+ MONTH;
        }
        if(DAY.length < 2){
            DAY = "0"+ DAY;
        }
        let result = `${YEAR}-${MONTH}-${DAY}`;
        return result;
        
    }catch(err){
        console.log("ERROR on getting year|return");
        console.log(err);
    }
}