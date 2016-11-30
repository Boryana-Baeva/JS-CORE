function triangleArea([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let p = (a + b + c) / 2;
    let areaOfTriangle = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(areaOfTriangle);
}

triangleArea(['2','3.5','4']);