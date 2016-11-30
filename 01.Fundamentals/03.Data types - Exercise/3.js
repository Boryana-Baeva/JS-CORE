function distanceOverTime([speed1, speed2, timeInSec]) {
    [speed1, speed2, timeInSec] = [speed1, speed2, timeInSec].map(Number);
    let time = timeInSec / 3600;
    let distance1 = speed1 * time;
    let distance2 = speed2 * time;
    let deltaDistInMeters = (Math.max(distance1,distance2) - Math.min(distance1,distance2)) * 1000;
    console.log(deltaDistInMeters);
}

distanceOverTime([0, 60, 3600]);