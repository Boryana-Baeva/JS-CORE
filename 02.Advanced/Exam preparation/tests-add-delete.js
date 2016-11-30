let expect = require('chai').expect;
//let List = require('./add-delete-in-list').List;
function produce() {
    let data = [];
    return {
        add: function (item) {
            data.push(item);
        },
        delete: function (index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe("List", function () {
   //let list = {};
   //beforeEach(function () {
   //    list = produce();
   //});
    it('should have add() function', () => {
        expect(list.hasOwnProperty('add')).to.equal(true);
        expect(typeof list.add).to.equal('function');
    });

    it('should have delete() function', () => {
        expect(list.hasOwnProperty('delete')).to.equal(true);
        expect(typeof list.delete).to.equal('function');
    });

    it('should have toString() function', () => {
        expect(list.hasOwnProperty('toString')).to.equal(true);
        expect(typeof list.toString).to.equal('function');
    });

    it('should be empty on init', () => {
        expect(list.toString()).to.equal('');
    });

    it('should add elements', () => {
        list.add(5);
        list.add('six');
        list.add(7);
        list.add(8);
        expect(list.toString()).to.equal('5, six, 7, 8');
    });

    it('should delete elements by index', () => {
        list.add(5);
        list.add('six');
        list.add(7);
        list.add(8);
        list.delete(2);
        expect(list.toString()).to.equal('5, six, 8');
    });

    it("should not delete elements with a negative index", () => {
        list.add(5);
        list.add('six');
        list.add(7);
        list.add(8);
        expect(list.delete(-2)).to.equal(undefined);
    });

    it("should not delete elements with a string index", () => {
        expect(list.delete('abcd')).to.equal(undefined);
    });

    it("should not delete elements with a floating point index", () => {
        expect(list.delete(5.67)).to.equal(undefined);
    });
    it("should not delete non existing elements", () => {
        expect(list.delete(0)).to.equal(undefined);
    });
    it("should not delete any elements with a non integer index", () => {
        list.add(5);
        list.add(7);
        list.add(8);
        expect(list.delete(1.67)).to.equal(undefined);
        expect(list.toString()).to.equal('5, 7, 8');
    });

    it("should not delete any elements when the index is equal to the count of elements", () => {
        list.add(5);
        list.add(7);
        list.add(8);
        expect(list.delete(3)).to.equal(undefined);
    });
});
