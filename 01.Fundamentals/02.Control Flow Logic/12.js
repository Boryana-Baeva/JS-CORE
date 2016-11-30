function primeCheck(num) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            prime = false;
            break;
        }
    }
    return prime && (num > 1) ;
}

function isPrime(num) {
    let prime = true;
    for (let d = 2; d <= Math.sqrt(num); d++) {
        if (num % d == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}
