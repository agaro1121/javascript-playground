const should = require('should');

/*
* Run this from command line `mocha mocha.js`
* */

const testObject = {
  "firstName": "Anthony",
  "lastName": "Garo",
  "age": 29
};

const someAsyncAction = Promise.resolve(testObject);

describe("SomeTestSuite", () => {

    it("should do some successful stuff", () => {
        testObject.should.have.property("firstName", "Anthony");
    });

    it("should do some UNsuccessful stuff", () => {
        testObject.should.have.property("middleName");
    });

    // Skipped/pending test
    it.skip("should skip UNsuccessful stuff", () => {
        testObject.should.have.property("middleName");
    });


});