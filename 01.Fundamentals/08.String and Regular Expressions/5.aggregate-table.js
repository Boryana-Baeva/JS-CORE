function aggregateTable(tableRows) {
    let list = [];
    let sum = 0;
    for (let row of tableRows) {
        let data = row.split('|');
        let town = data[1].trim();
        let income = Number(data[2].trim());

        list.push(town);
        sum += income;

    }

    console.log(list.join(', ') + `\n${sum}`);

}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);