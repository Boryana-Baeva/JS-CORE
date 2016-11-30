let SortedList = require('./sorted-list').SortedList;
let expect = require('chai').expect;

describe ("SortedList",function () {
    let myList = {};

    beforeEach (function () {
        myList = new SortedList();
    });
    
    it("should have a constructor", function () {
        expect(typeof SortedList).to.be.equal('function');

        expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true, "Didn't find add function.");
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true, "Didn't find remove function.");
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true, "Didn't find get function.");
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true, "Didn't find size function.");
    });

    it("should have size property", function () {
            expect(myList.size).to.be.equal(0);
        });
    it("should have a working add", function () {
        myList.add(5);
        expect(myList.size).to.be.equal(1);
    });
    it("should have a working add and get", function () {
        myList.add(4);
        expect(myList.get(0)).to.be.equal(4);
    });
    it("should have a working sort", function () {
        myList.add(5);
        myList.add(4);
        myList.add(2);
        myList.add(10);
        expect(myList.get(0)).to.be.equal(2);
        expect(myList.get(1)).to.be.equal(4);
        expect(myList.get(2)).to.be.equal(5);
        expect(myList.get(3)).to.be.equal(10);
        expect(myList.size).to.be.equal(4);
    });
    it("should have a working remove and get", function () {
        myList.add(5);
        myList.add(4);
        myList.add(2);
        myList.add(10);
        myList.remove(1);
        expect(myList.get(0)).to.be.equal(2);
        expect(myList.get(1)).to.be.equal(5);
        expect(myList.get(2)).to.be.equal(10);
        expect(myList.size).to.be.equal(3);
    });
    it("should not work with a negative index", function () {
        myList.add(5);
        myList.add(2);
        myList.add(10);
        expect(() => myList.get(-1)).to.throw(Error);
        expect(() => myList.remove(-1)).to.throw(Error);

    });
    it("should not work with outside index", function () {
        myList.add(5);
        myList.add(2);
        myList.add(10);
        expect(() => myList.get(4)).to.throw(Error);
        expect(() => myList.remove(4)).to.throw(Error);

    });
    it("should not work with empty collection", function () {
        expect(() => myList.get(0)).to.throw(Error);
        expect(() => myList.remove(0)).to.throw(Error);

    });
});