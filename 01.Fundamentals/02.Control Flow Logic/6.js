function coneVolumeAndArea([r, h]) {
    [r, h] = [r, h].map(Number);
    let volume = 1/3 * Math.PI * Math.pow(r, 2) * h;
    let L = Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let B = Math.PI * Math.pow(r, 2);
    let totalArea = L + B;
    console.log("volume = " + volume);
    console.log("area = " + totalArea);
}

coneVolumeAndArea([3,5])