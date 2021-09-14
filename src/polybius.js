// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let square = {1: ['a', 'b', 'c', 'd', 'e'], 2: ['f', 'g', 'h', '(i/j)', 'k'], 3: ['l', 'm', 'n', 'o', 'p'], 4: ['q', 'r', 's', 't', 'u'], 5: ['v', 'w', 'x', 'y', 'z']};
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  function encode(input) {
    let newInput = input.toLowerCase();
    let message = '';
    for (let i = 0; i < newInput.length; i++) {
    if (!alphabet.includes(newInput[i])) {
      message += newInput[i];
    }
    if (newInput[i] == 'i' || newInput[i]=='j'){
      message += '42'
    }
    for (let row in square) {
      if (square[row].includes(newInput[i])) {
        message += `${square[row].indexOf(newInput[i])+1}` + `${row}`
      }
    }
    }
    for (let j = 0; j< message.length; j++) {
      message = message.replace('-','')
      }
    return message
    }




  function polybius(input, encode = true) {
    // your solution code here
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


function encode(input) {
  let newInput = input.toLowerCase();
  let message = '';
  for (let i = 0; i < newInput.length; i++) {
  if (!alphabet.includes(newInput[i])) {
    message += newInput[i];
  }
  if (newInput[i] == 'i' || newInput[i]=='j'){
    message += '42'
  }
  for (let row in square) {
    if (square[row].includes(newInput[i])) {
      message += `${square[row].indexOf(newInput[i])+1}` + `${row}`
    }
  }
  }
  for (let j = 0; j< message.length; j++) {
    message = message.replace('-','')
    }
  return message
  }