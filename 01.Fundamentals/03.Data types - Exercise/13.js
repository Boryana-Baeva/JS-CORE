function lastMonth([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);
    //let date = new Date(year, month, day );
    switch (month){
        case 1:
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:
            console.log("31");break;
        case 5:
        case 7:
        case 10:
        case 12:
            console.log("30");break;
        case 3: if(((year % 4 == 0 && year % 100 != 0)|| (year % 400 == 0))) console.log("29");
                else console.log("28");
            break;
    }
}

lastMonth(['13','3','2002']);