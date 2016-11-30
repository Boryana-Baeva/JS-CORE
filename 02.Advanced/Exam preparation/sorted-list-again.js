class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        //this.size++;
    }

    remove(index) {
        if (this.indexCheck(index)) {
            this.list.splice(index, 1);
            this.list.sort((a, b) => a - b);
            //this.size--;
        }
        else {
            throw Error;
        }
    }
    get(index) {
        if (this.indexCheck(index)) {
            return this.list[index];
        }
        else {
            throw Error;
        }
    }

    indexCheck(index) {
        return !(index < 0 || index >= this.list.length);
    }
}

let l = new SortedList();
console.log(l.add(8));
console.log(l.remove(1));
console.log(l.size);
console.log(l.get(3));
console.log(l.add(56));
console.log(l.add(23));
console.log(l.add(898));
console.log(l.size);