function compoundInterest([sum, interestPercent, period, time ]) {
    [sum, interestPercent, period, time ] =
        [sum, interestPercent, period, time ].map(Number);
    let frequency = 12 / period;
    let interest = interestPercent / 100;
    let totalValue = sum * Math.pow((1 + interest/ frequency), frequency * time);
    console.log(totalValue.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);