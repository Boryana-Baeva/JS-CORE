function rounding([number, precision]) {
    [number, precision] = [number, precision].map(Number);
    if (precision < 15) console.log(parseFloat(number.toFixed(precision)));
    else console.log(parseFloat(number.toFixed(15)));
}

rounding([10.5, 15]);