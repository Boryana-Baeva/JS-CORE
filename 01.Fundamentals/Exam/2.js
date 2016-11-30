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

    let sum = 0;
    let letters = [];
    for (let i = 0; i < templateLength; i++) {
        for (let j = 0; j <templateLength; j++){
            sum = template[i][j] + message[i][j];
            console.log(sum % 27 );
            switch (sum % 27){
                case 0: letters.push(" ");break;
                case 1: letters.push("A");break;
                case 2: letters.push("B");break;
                case 3: letters.push("C");break;
                case 4: letters.push("D");break;
                case 5: letters.push("E");break;
                case 6: letters.push("F");break;
                case 7: letters.push("G");break;
                case 8: letters.push("H");break;
                case 9: letters.push("I");break;
                case 10: letters.push("J");break;
                case 11: letters.push("K");break;
                case 12: letters.push("L");break;
                case 13: letters.push("M");break;
                case 14: letters.push("N");break;
                case 15: letters.push("O");break;
                case 16: letters.push("P");break;
                case 17: letters.push("Q");break;
                case 18: letters.push("R");break;
                case 19: letters.push("S");break;
                case 20: letters.push("T");break;
                case 21: letters.push("U");break;
                case 22: letters.push("V");break;
                case 23: letters.push("W");break;
                case 24: letters.push("X");break;
                case 25: letters.push("Y");break;
                case 26: letters.push("Z");break;


            }

        }

    }
    console.log(letters);
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