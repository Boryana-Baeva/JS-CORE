function figure([n]) {
    let outline = '';
    let inline = '';

    outline = '+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+';
    for (let i = 0; i < 2; i++) {
        if (n <= 2) break;
        console.log(outline);
        for (let j = 0; j < Math.floor((n - 3) / 2); j++) {

            inline = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|';
            console.log(inline);
        }
    }
    console.log(outline);

}

figure(['5']);

