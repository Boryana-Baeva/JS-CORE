function monthlyCalendar([day, month, year]) {
    
    
    console.log('<table>');
    console.log('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>');

    let date = new Date(year, month, day);
    let dayOfWeek = date.getDay() - 2;
    console.log(date.getDay()-2, date.getDate(), date.getMonth(), date.getFullYear());
    let prev = dayOfWeek;
    let line = '';

        for (let j = 31 - prev; j <= prev; j++) {
            line += `${j} `;
            console.log(line);
        }


    console.log('</table>')
}

monthlyCalendar(['1', '9', '2016']);