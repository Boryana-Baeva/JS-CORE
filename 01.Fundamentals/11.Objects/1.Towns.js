function townsToJson(input) {
    let arr = [];

    for (let row of input.slice(1)){

        let [name, lat, lng] = row.split(/\s*\|\s*/)
            .filter(t => t != '');
        let townObj = {
            Town: name,
            Latitude: Number(lat),
            Longitude: Number(lng)
        };
        arr.push(townObj);
    }
   console.log(JSON.stringify(arr));
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);