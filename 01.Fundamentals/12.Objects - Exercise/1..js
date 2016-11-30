function heroInventory(heroData) {

    let heroObj = {};
    let arr = [];
    for  (let hero of heroData){
        let heroElements = hero.split(/\s*\/\s*/);
        heroObj = {
            name: heroElements[0],
            level: Number(heroElements[1]),
            items: []
        };
        if(heroElements.length > 2)heroObj.items = heroElements[2].split(', ');
        arr.push(heroObj);
    }
    console.log(JSON.stringify(arr));
}

heroInventory(["Isacc / 25",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);