class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(length) {
        this.innerLength += length;
        return this.innerLength;
    }

    decrease(length) {
        if (length <= this.innerLength) {
            this.innerLength -= length;
        }
        else {
            this.innerLength = 0;
        }

        return this.innerLength;
    }

    toString() {
        let result;
        if (this.innerString.length > this.innerLength) {
            result = this.innerString.slice(0, -this.innerLength);
            return result + "...";
        }
        else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...
