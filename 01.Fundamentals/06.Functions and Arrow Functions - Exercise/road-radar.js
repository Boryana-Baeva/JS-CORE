function roadRadar([speed, area]) {
    speed = Number(speed);

    let infraction = limitDifference(speed , area);
    if ( infraction > 0) {
        if (infraction <= 20) console.log("speeding");
        else if (infraction <= 40) console.log("excessive speeding");
        else console.log("reckless driving");
    }


    function limitDifference(speed, area) {
        if (area === 'motorway') return (speed - 130);
        if (area === 'interstate') return (speed - 90);
        if (area === 'city') return (speed - 50);
        if (area === 'residential') return (speed - 20);
    }
}

roadRadar([70, 'city']);