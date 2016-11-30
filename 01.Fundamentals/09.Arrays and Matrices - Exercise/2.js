function nthElement(input) {
    let n = Number(input.pop());
    input.filter((x,i)=> i % n == 0).forEach(x => console.log(x));
}

nthElement(["5","20","31","4","20","2"]);
nthElement(["dsa","asd","test","tset","2"]);
nthElement(["1","2","3","4","5","6"]);