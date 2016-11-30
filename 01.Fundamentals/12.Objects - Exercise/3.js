function cappyJuice(juices) {
    let obj = {};
    let m = new Map();
    for (let juice of juices) {
        let [name, quantity] = juice.split(/\s*=>\s*/);

        if (obj[name]) obj[name] += Number(quantity);
        else obj[name] = Number(quantity);

        if (obj[name] >= 1000){
           m.set(name, parseInt(obj[name] / 1000))
        }
    }
    for(let [juice, bottles] of m){
        console.log(`${juice} => ${bottles}`);
    }
}

cappyJuice(["Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549"]);