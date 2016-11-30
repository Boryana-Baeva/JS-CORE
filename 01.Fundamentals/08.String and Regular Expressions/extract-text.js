function extractText(str) {

    if(Array.isArray(str)) str = str[0];

    let result = [];
    let rightP = -1;
    while (true){
        let leftP = str.indexOf('(', rightP + 1);
        if (leftP == -1)
            break;
        rightP = str.indexOf(')', leftP + 1);
        if (rightP == -1)
            break;
        let extracted = str.substring(leftP + 1, rightP);
        result.push(extracted);

    }
    console.log(result.join(', '));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);