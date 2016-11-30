function matchTheDates(input) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let match = 0;
    for (let item of input) {
        while (match = pattern.exec(item)) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
}


matchTheDates(['I am born on 01-Jan-1994.', 'This is not date: 512-Jan-1996.', 'My father is born on the 29-Jul-1955.']);