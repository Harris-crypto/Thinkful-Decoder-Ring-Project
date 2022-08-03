// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
 
  
  
  function polybius(input, encode = true) {
    // your solution code here
    
const encodePolySquare =  //Here I'm creating my encoder polybius square that will convert a key letter into a number//
{ "a" : 11, "b" : 21, "c" : 31, "d" : 41, "e" : 51,
  "f" : 12, "g": 22, "h" : 32, "i/j" : 42, "k" : 52,
  "l" : 13, "m" : 23, "n" : 33, "o" : 43, "p" : 53,
  "q" : 14, "r" : 24, "s" : 34, "t" : 44, "u" : 54,
  "v" : 15, "w" : 25, "x" : 35, "y" : 45, "z" : 55}

 const decodePolySquare =  //Here I'm creating my decoder polybius square that will convert a key number into a letter//
{ 11 : "a", 21 : "b", 31 : "c", 41 : "d", 51 : "e",
  12 : "f", 22 : "g", 32 : "h", 42 : "i/j", 52 : "k",
  13 : "l", 23 : "m", 33 : "n", 43 : "o", 53 : "p",
  14 : "q", 24 : "r", 34 : "s", 44 : "t", 54 : "u",
  15 : "v", 25 : "w", 35 : "x", 45 : "y", 55 : "z"}
  
   // console.log(input)


   if (encode) { // if encode is true, run the following block of code //
    let encodedNumber = [] // sets up empty array to pass in the numbers from key letters //
     for (let i = 0; i < input.length; i++) 
     
     if (input[i] === " ") { // if my for loop encounters a space, it gets pushed to the encodedNumber array //
      encodedNumber.push(input[i])
     } else if (input[i] === "i" || input[i] === "j") { //if my for loop encounters either an "i" or a "j", push the number 42 into the encodedNumber array. 42 represents "i/j" in the polybius squares.
       encodedNumber.push(42)
      } else {
      encodedNumber.push(encodePolySquare[input[i]]) // if a space or "i/j" are not encountered, push the number associated with the letter into the array //
     }
    
     return ((encodedNumber).join("")) // Here I remove the array, all commas and join together the numbers as a string, then the result is returned //
   }
    else { 
     let letter = "" // I'm setting up an empty string to pass each character in, piecing together the word/sentence //
      for (let i = 0; i < input.length; i+=2) { // My for loop is set to increment by two so that it doesnt read each individual number but the key number //
        if (input[i] === " ") {
          letter += " ";  // If the input lands on a space, it will push the space into my "letter" string //
          i-- // after landing on a space, I then move my index back a space, so when it increments by two, it will jump over the space and land on the first number of my next key number //
        } else { // if it doesnt land on a space //
       let num = input.slice(i, i+2) // I use the index as the first part of my slice, and stop it on index + 2 so that it will list the first and second digit of my key number //
      letter += decodePolySquare[num] // I now add the key number to my "letter" string which will result in the letter associated with that key number being added to the string //
      if (num < 10) {return false} // Here I rule out any possibility of a single digit messing things up by returning false if a single digit is entered into the input //
      }}
      //console.log(letter)
      return letter
     }
    

    /*
encoding a message
      1) should encode a message by translating each letter to number pairs
      2) should translate both 'i' and 'j' to 42
      3) should leave spaces as is
    */
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
