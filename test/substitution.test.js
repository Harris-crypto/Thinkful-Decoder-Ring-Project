const { expect } = require("chai");
const { substitution } = require("../src/substitution");
// Write your tests here!

describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => { 

      const actual = substitution("message");
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      
      const actual = substitution("message", "fakeAlphabet");
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
     
      const actual = substitution("message", "sameletterbad");
      expect(actual).to.be.false;
    });
  });
  
  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {    
      
      const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
      const expected = "ykrrpik";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      
      const actual = substitution("message", ".waeszrdxtfcygvuhbijnokmpl");
      const expected = "ysii.rs";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
     
      const actual = substitution("my message", ".waeszrdxtfcygvuhbijnokmpl");
      const expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
     
      const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      
      const actual = substitution("ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
     
      const actual = substitution("yp ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });
  });