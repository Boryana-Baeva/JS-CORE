class Rat {
    constructor (name){
        this.name = name;
        this.rats = [];
    }

    unite (otherRat){
        if(otherRat instanceof Rat){
            this.rats.push(otherRat);
        }
    }

    getRats (){
        return this.rats;
    }

    toString(){
        let arr = [];
        for(let rat of this.rats){
            arr.push("##" + rat.name);
        }
        arr = arr.join('\n');
        return `${this.name}\n${arr}`;
    }

}

let test = new Rat("Pesho");
test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.toString());

console.log(test.getRats());
