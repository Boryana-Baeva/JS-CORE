function biggestNum(rows) {
    let matrix = rows.map(row => row.split(' ').map(Number));

    let biggest = Number.NEGATIVE_INFINITY;

    matrix.forEach(
        r => r.forEach(
            c => biggest = Math.max(biggest, c)));

    return biggest;
}