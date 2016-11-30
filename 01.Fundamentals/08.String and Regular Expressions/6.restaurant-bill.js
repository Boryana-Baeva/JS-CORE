function restaurantBill(list) {

    let products = list.filter(((x, i) => i % 2 == 0));
    let sum = list.filter(((x, i) => i % 2 == 1))
        .map(Number)
        .reduce((x, s) => s += x);
    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);

}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);