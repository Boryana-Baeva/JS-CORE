function smallest2Nums(input) {

    return input
        .map(Number)
        .sort((a, b) =>(a-b) )
        .slice(0,2);
}
console.log(smallest2Nums(['30', '15', '50', '5']));