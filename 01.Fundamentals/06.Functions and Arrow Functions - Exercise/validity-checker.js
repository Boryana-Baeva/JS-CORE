function validityChecker([x1, y1, x2, y2]) {
    
    if (isInteger(calculateDist(x1, y1, 0, 0))) console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    if (isInteger(calculateDist(x2, y2, 0, 0))) console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    if (isInteger(calculateDist(x1, y1, x2, y2))) console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    function calculateDist(x1,y1, x2, y2) {
        let deltaX12 = x1 - x2;
        let deltaY12 = y1 - y2;
        return Math.sqrt(deltaX12* deltaX12 + deltaY12*deltaY12);
    }

    function isInteger(a) {
        return a === parseInt(a);
    }
}

validityChecker(['2','1','1','1']);