function sortBy2Criteria(input) {
    //input.sort((a, b) => (a.length - b.length)).forEach(a => console.log(a));

    input.sort((a, b) => {

        if(a[0] === b[0])
        {
            let x = a.toLowerCase().charCodeAt(0), y = b.toLowerCase().charCodeAt(0);
            return x < y ? -1 : x > y ? 1 : 0;
        }
            else return a.length - b.length;
        }
    ).forEach(a => console.log(a));


}

sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log();
sortBy2Criteria(["test", "Deny", "omen", "Default"]);