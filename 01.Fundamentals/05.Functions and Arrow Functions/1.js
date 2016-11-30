function triangleOfStars([size]) {
    for (let i = 1; i <= size ; i++) printStars(i);
    for (let i = size - 1; i > 0; i--) printStars(i);

    function printStars(count) {
        console.log("*".repeat(count));
    }
}

triangleOfStars(['5']);