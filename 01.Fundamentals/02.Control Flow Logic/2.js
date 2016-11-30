function fitBottlesInBoxes([n,k]) {
    let numberOfBoxes = 0;
    if (n % k == 0) numberOfBoxes = n / k;
    else numberOfBoxes = Number.parseInt(n / k) + 1;
    return(numberOfBoxes);
}

fitBottlesInBoxes([21,5]);