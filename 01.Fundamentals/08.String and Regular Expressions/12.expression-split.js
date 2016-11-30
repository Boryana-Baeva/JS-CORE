function expressionSplit([input]) {
    let pattern = /[ (),;\.\\\t]+/g;
    input = input.split(pattern).forEach(x => console.log(x));

}

//expressionSplit(['let sum = 4 * 4,b = "wow";']);
expressionSplit(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']);