const { expect } = require("chai");
const { polybius } = require("../src/polybius");
// Write your tests here!
/*
For the Polybius square (example: polybius("message") => "23513434112251"), the tests that you write should test that the following is true:

When encoding, it translates the letters i and j to 42.

When decoding, it translates 42 to (i/j).

It ignores capital letters. (For example, the results of A Message and a message should be the same.)

It maintains spaces in the message, before and after encoding or decoding.
*/
describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      
      const actual = polybius("abc");
      const expected = "112131";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      
      const actual = polybius("jill");
      const expected = "42421313";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      
      const actual = polybius("it works");
      const expected = "4244 2543245234";

      expect(actual).to.equal(expected);
    }); 
})
describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      
      const actual = polybius("42421313", false);
      const expected = "i/ji/jll";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      
      const actual = polybius("42421313", false); //"jill"

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      
      const actual = polybius("4244 2543245234", false);
      const expected = "i/jt works";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      
      const actual = polybius("4244 25432452341", false);

      expect(actual).to.be.false;
    });
  });