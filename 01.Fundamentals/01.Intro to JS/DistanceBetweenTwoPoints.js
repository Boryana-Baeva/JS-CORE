function calculateDistance([xA, yA, xB, yB]) {
    let deltaX = Number(xA) - Number(xB);
    let deltaY = Number(yA) - Number(yB);
    let distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    console.log(distance);
}
 calculateDistance(['2','4','5','0']);