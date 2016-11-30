function magicMatrices(input) {
    let matrix = input.map(
        row => row.split(" ").map(Number));

    let sum = matrix[0].reduce((a, b) => (a + b));
    let colSum = 0;
    for(let row in matrix){
        let rowSum = matrix[row].reduce((a, b) => a+ b);
        if(rowSum != sum){
            return false
        }
        console.log(rowSum);

        for (let col = 0; col < row.length; col++) {
            colSum += matrix[row][col];
        }


    }

    console.log(colSum);


}

magicMatrices(['4 5 6','6 5 4','5 5 5']);