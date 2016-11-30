function oddOrEven([number]) {
    let remainder = number % 2;
    if( remainder == 0) console.log("even");
    else if (remainder == Math.round(remainder)) console.log("odd");
    else console.log("invalid");
}

oddOrEven([1.2]);