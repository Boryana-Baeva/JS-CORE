function gradsToDegrees([grads]) {
    let degrees = Number(grads)* 0.9;
    degrees %= 360;
    if (degrees < 0) degrees += 360;
    console.log(degrees);
}

gradsToDegrees([-50]);