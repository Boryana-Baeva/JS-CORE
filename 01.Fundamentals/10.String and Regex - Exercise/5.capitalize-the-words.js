function capitalizeTheWords([str]) {
    let words = str.split(' ');
    let result = [];
    for (let word of words) {
        let capital = word.charAt(0).toUpperCase();
        let lower = word.substr(1).toLowerCase();
        result.push(capital.concat(lower));
    }
    console.log(result.join(' '));

}
capitalizeTheWords(['Was that Easy? tRY thIs onE for SiZe!']);
capitalizeTheWords(['Capitalize these words']);