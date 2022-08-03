// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("Should return false if shift is 0", () => {
        const actual = caesar("abc", 0)
        expect(actual).to.be.false
    })
    it("Should return false if shift is less than -25", () => { 
        const actual = caesar("abc", -26)
        expect(actual).to.be.false
    })
    it("Should return false if shift is greater than 25", () => { 
        const actual = caesar("abc", 26)
        expect(actual).to.be.false
    })
    it("should wrap around to the front of the alphabet (e.g., z becomes c)", () => { 
        const expected = "abc"
        const actual = caesar("xyz", 3)
        expect(actual).to.equal(expected)
    })
    it("should wrap around to the back of the alphabet (e.g., c becomes z)", () => { 
        const expected = "xyz"
        const actual = caesar("abc", -3)
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces throughout, as should other nonalphabetic symbols.", () => { 
        const expected = "xy& z"
        const actual = caesar("ab& c", -3)
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => { 
        const expected = "abc"
        const actual = caesar("XYZ", 3)
        expect(actual).to.equal(expected)
    })
}) 
//If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).//
/*Spaces should be maintained throughout, as should other nonalphabetic symbols.
Capital letters can be ignored.*/