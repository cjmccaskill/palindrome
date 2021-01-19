let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
  // Phrase#palindrome
  describe("#palindrome", function () {
    it("should return false for non-palindrome", function () {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return false for plain palindrome", function () {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome");

    it("should return true for a palindrome with punction");
  });
});
