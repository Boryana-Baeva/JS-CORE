function tripLength([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    let distance12 = calculateDistance(x1, y1, x2, y2);
    let distance13 = calculateDistance(x1, y1, x3, y3);
    let distance23 = calculateDistance(x2, y2, x3, y3);

   // let arr = [distance12, distance13, distance23].sort((a, b) => (a - b)).join("->");

    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }


    function calculateDistance(xA, yA, xB, yB) {
        let deltaX = xA - xB, deltaY = yA - yB;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    }
}

tripLength([5, 1, 1, 1, 5, 4]);