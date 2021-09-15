// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let transposed = 'xoyqmcgrukswaflnthdjpzibev'

  function encode (input) {
    let message = '';
    for (let i = 0; i < input.length; i++) {
      let index = alphabet.indexOf(input[i]);
      message += transposed.index
    }
  }
  
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
