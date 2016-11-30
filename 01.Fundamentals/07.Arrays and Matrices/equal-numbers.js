function equalNeighbours(arr) {
    let matrix = arr.map(
        row => row.split(" "));
    let neighbours = 0;
    for (let r = 0; r < matrix.length - 1; r++) {
        for (let c = 0; c < matrix[r].length ; c++) {
            if( matrix[r][c] === matrix[r + 1][c]) neighbours++;
        }
    }
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length - 1 ; c++) {
            if (matrix[r][c] === matrix[r][c + 1]) neighbours++;
        }
    }

    return neighbours;
}

console.log(equalNeighbours(['test yes yo ho',
    'well done yo 6',
    'not done yet 5']
));