function rosettaStone(input) {

    let templateLength = Number(input.shift());
    let template = [];
    let message = [];

    for (let i = 0; i < templateLength; i++) {
        template.push(input.shift().split(' ').map(Number));
    }


    for (let row of input) {
        message.push(row.split(' ').map(Number));
    }

    console.log(templateLength);
    console.log(template);
    console.log(message);

    for (let k = 0; k < message.length / templateLength; k++) {
        for (let i = k; i < message.length; i += templateLength) {
            for (let j = 0; j < message[i].length; j += templateLength) {
                console.log(message[i][j]);
            }
            console.log();
            for (let j = 1; j < message[i].length; j += templateLength) {
                console.log(message[i][j]);
            }
console.log();
        }
        console.log();
    }


}

rosettaStone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
);