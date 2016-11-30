function storeCatalog(input) {
    let initials = new Map();
    
    for (let i = 0; i < input.length; i++) {
        let itemInfo = input[i].split(' : ');
        let productName = itemInfo[0];
        let productPrice = Number(itemInfo[1]);
        let initial = productName[0];

        if (!initials.has(initial)){
            initials.set(initial, new Map());
        }

        initials.get(initial).set(productName, productPrice);
    }


    let sortedInitials = [...initials].sort(alphabeticalSort);

    for (let [key, value] of sortedInitials){
        console.log(key);
        let sortedProducts = [...value].sort(alphabeticalSort);
        for (let [product, price] of sortedProducts){
            console.log(`  ${product}: ${price}`);
        }
    }

    function alphabeticalSort(a,b) {
        return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    }
}

storeCatalog(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]);