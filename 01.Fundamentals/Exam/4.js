function arithmephile(numbers) {
    numbers = numbers.map(Number);
    let product = 1;
    let products = [];
    for (let s = 0; s < numbers.length; s++) {

        if (numbers[s] >= 0 && numbers[s] < 10) {

            for (let p = 1; p <= numbers[s]; p++) {
                product *= numbers[s + p];

            }
            products.push(product);
            product = 1;
        }
    }

    products = products.sort((a, b) => (b - a));
    console.log(products.shift());
}

arithmephile(["10", "20", "2", "30", "44", "123", "3", "56", "20", "24"]);
arithmephile(["100","200","2","3","2","3","2","1","1"]);