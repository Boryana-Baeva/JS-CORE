function rectangleOfStars(sizeRect = 5 ) {
    //sizeRect = typeof sizeRect !== 'undefined' ? sizeRect : 5;
    let size = Number(sizeRect);
    for (let i = 0; i < size ; i++) {
        console.log("*" + " *".repeat(size - 1 ));
    }
}

rectangleOfStars();