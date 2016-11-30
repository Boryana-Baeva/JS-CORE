function areaAndPerimeter([sideA, sideB]) {
    [sideA, sideB] = [sideA, sideB].map(Number);
    let area = sideA * sideB;
    let perimeter = 2 * (sideA + sideB);
    console.log(area.toFixed( 2));
    console.log(perimeter.toFixed(2));
}
 areaAndPerimeter([2.5, 3.14]);