function modifyAverage([number]) {

    let average = getAverage(number);

    while (average <= 5){
        number = number.concat("9");
        average =getAverage(number);
    }

    function getAverage(number) {
        let sumOfDigits =0;
        for (let i = 0; i < number.length; i++) {
            sumOfDigits += Number(number[i]);
        }
        return sumOfDigits / number.length;
    }

    return number;

}

console.log(modifyAverage(['00']));