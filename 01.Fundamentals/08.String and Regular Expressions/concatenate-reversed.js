function concatenateReversed(input) {

    let all = input.join('');
    let letters = Array.from(all);
    let reversed = letters.reverse();

    return reversed.join('');
}

console.log(concatenateReversed(['I', 'am', 'student']));