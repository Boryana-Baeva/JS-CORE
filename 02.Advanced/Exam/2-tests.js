let expect = require('chai').expect;
function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length || !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe("List", function () {
    let list = {};
    beforeEach(function () {
        list = createList();
    });

    describe("Initialization", function () {
        it('should be empty on init', () => {
            expect(list.toString()).to.equal('');
        });
    });
    describe("Functionality", function () {

        it('should be function', () => {
            expect(typeof createList).to.equal('function');
        });

        it('should have add() function', () => {
            expect(list.hasOwnProperty('add')).to.equal(true);
            expect(typeof list.add).to.equal('function');
        });

        it('should have shiftLeft() function', () => {
            expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
            expect(typeof list.shiftLeft).to.equal('function');
        });

        it('should have shiftRight() function', () => {
            expect(list.hasOwnProperty('shiftRight')).to.equal(true);
            expect(typeof list.shiftRight).to.equal('function');
        });

        it('should have swap() function', () => {
            expect(list.hasOwnProperty('swap')).to.equal(true);
            expect(typeof list.swap).to.equal('function');
        });

        it('should have toString() function', () => {
            expect(list.hasOwnProperty('toString')).to.equal(true);
            expect(typeof list.toString).to.equal('function');
        });

        it('should not work if the list is empty', () => {
            expect(list.shiftLeft()).to.equal(undefined);
            expect(list.shiftRight()).to.equal(undefined);
            expect(list.swap(0, 3)).to.equal(false);

        });

    });


    describe("Add", function () {

        it('should add elements', () => {
            list.add(5);
            list.add('six');
            list.add(7);
            list.add(8);
            expect(list.toString()).to.equal('5, six, 7, 8');
        });

    });

    describe("Shift Left", function () {

        it('should shift left elements to the left', () => {
            list.add(5);
            list.add('six');
            list.add(7);
            list.add(8);
            list.shiftLeft();
            expect(list.toString()).to.equal('six, 7, 8, 5');
        });

        it('should not shift left if only one element', () => {
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.equal('5');
        });

        it('should not shift left if empty', () => {
            list.shiftRight();
            expect(list.toString()).to.equal('');
        });

    });

    describe("Shift Right", function () {

        it('should shift right elements to the right', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            list.shiftRight();
            expect(list.toString()).to.equal('four, six, 7, 8');
        });

        it('should not shift right if only one element', () => {
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.equal('5');
        });

        it('should not shift right if empty', () => {
            list.shiftRight();
            expect(list.toString()).to.equal('');
        });

    });

    describe("Swap", function () {

        it('should swap elements by index and return true', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(0, 3)).to.equal(true);
            expect(list.toString()).to.equal('four, 7, 8, six');
        });

        it('should not swap elements if index is negative', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(0, -3)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if index is negative', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(-1, 3)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if both indexes are negative', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(-1, -3)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if index is out of bounds', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(0, 8)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if index is out of bounds', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(8, 0)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if both indexes are out of bounds', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(8, 18)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if indexes are equal', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(2, 2)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if indexes are not numbers', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap('two', '3')).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if indexes are floating point numbers', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(2.3, 3.5)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap elements if index is equal to the count of elements', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(2, 4)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });
        it('should not swap elements if index is equal to the count of elements', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.swap(4, 2)).to.equal(false);
            expect(list.toString()).to.equal('six, 7, 8, four');
        });

        it('should not swap if empty', () => {
            expect(list.swap(0, 3)).to.equal(false);
            expect(list.toString()).to.equal('');
        });

    });

    describe("toString", function () {
        it('should have a working toString()', () => {
            list.add('six');
            list.add(7);
            list.add(8);
            list.add('four');
            expect(list.toString()).to.equal('six, 7, 8, four');
        });
        it('should have a working toString()', () => {
            expect(list.toString()).to.equal('');
        });
    });
});