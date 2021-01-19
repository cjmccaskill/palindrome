module.exports = Phrase;

// Adds`reverse` to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

// Define a Phrase object
function Phrase(content) {
  this.content = content;

  // Returns the string in lowerCase format
  this.processor = function (string) {
    return string.toLowerCase();
  };

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };

  // Returns true is the phrase is palindrome, flase otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}
