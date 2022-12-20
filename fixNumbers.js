
let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
let arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

export function fixNumbers(str){
    console.dir(str);

    if(typeof str === 'string'){
        for(var i=0; i<10; i++){
            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }
    if(str.includes("/")){
        str = str.split("/");
        str = str.join("-");
    }
    return str;
};
