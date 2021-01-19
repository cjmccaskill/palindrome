// Reverse string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Adds`reverse` to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

// // Returns true if the string is empty or consists solely of whitespace.
// String.prototype.blank = function () {
//   return !!this.match(/^\s*$/g);
// };
// // Add 'last' method to all arrays
// Array.prototype.last = function () {
//   return this[this.length - 1];
// };

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

// DEMO on Translating Phrases

// // Define a TranslatedPhrase object
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Returns translation processed for palindrome testing
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   };
// }

// TranslatedPhrase.prototype = new Phrase();
