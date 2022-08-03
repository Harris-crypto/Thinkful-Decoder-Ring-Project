// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // substitution alphabet must exist and be exactly 26 characters long.
    if (!alphabet || alphabet.length !== 26) return false

    
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz" // Just defining the alphabet here //
    const inputArray = input.toLowerCase().split("") // Here I make sure that the input is all lower cased, and add .split() to turn the input into a string
    const fakeAlphabet = alphabet.toLowerCase().split("") // Same step as above //

    // substitution alphabet can not have any repeated characters
    const uniqueChars = fakeAlphabet.filter((letter, index, own) => own.indexOf(letter) === index) //  searches the entire calling string, and returns the index of the first occurrence of the specified substring //
    if (uniqueChars.length !== alphabet.length) return false // makes sure the subAlphabet and realAlphabet are the same length, if not returns false //
 
    const encodeMessage = () => {
      let result = [] // setting up empty array to push in characters //
      const encode = ((char) => { 
        const charIndex = realAlphabet.indexOf(char)
       result.push(fakeAlphabet[charIndex])  // matching fake alphabet and real alphabet by getting index of alphabet characters //
      })
      inputArray.forEach((char) => {      
        char === " " ? result.push(" ") : encode(char) // checks if each character is a space, if it is, push the space. If not, push the character.
      })
      return result.join("") // concat, removing array and changing into a string //
    }
    const decodeMessage = () => {
      let result = [] // setting up empty array to push in characters //
      const decode = (char) => {
        const charIndex = fakeAlphabet.indexOf(char) // inverse of line 27 //
        result.push(realAlphabet[charIndex])       
      }
      inputArray.forEach((char) => {        
        char === " " ? result.push(" ") : decode(char) // preserves space or encodes character //
      })
      return result.join("")
    }

   if (encode) {return encodeMessage()} else { return decodeMessage()} // with errors now handled, next decide to encode or decode based on encode being true or false //
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
