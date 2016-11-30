function storeCatalogue(products) {

    let s = new Set();
    for (let product of products.sort()){
        let [name, price] = product.split(/\s*:\s*/);
        s.add(product);
    }

    //console.log(s);
for (let letter = 'A';  letter <= 'Z' ; letter ++) {

        console.log([...s].filter(a => a.charAt(0) == letter).join('\n'))

}


}


storeCatalogue(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]);