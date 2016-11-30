function startsWith([str, sub]) {
    return str.substr(0,sub.length) == sub;
}

console.log(startsWith(['How have you been?', 'How']));