function wordsUppercase([str]) {

    let result = extract();
    return result.join(", ").toUpperCase();
    
    function extract() {
        return str.match(/\w+/g);
    }

}

console.log(wordsUppercase(["The input comes as an array. "]));
