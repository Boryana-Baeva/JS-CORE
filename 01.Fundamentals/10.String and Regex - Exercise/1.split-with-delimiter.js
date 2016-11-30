function splitWithDelimiter([str, del]) {

    let result = str.split(del).forEach(p => console.log(p));

}

splitWithDelimiter(['One-Two-Three-Four-Five','-']);