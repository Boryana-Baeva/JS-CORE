function endsWith([str, sub]) {
    return str.substr(-sub.length) == sub;
}

console.log(endsWith(['This sentence ends with fun?', 'fun?']));