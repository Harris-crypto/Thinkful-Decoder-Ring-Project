// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift , encode = true) {
    // your solution code here
   
    if (shift === 0 || shift > 25 || shift < -25) {
    return false } // Here I'm checking the shift stays within the parameter of the alphabet and if it actually contains a shift. If it doesn't, false is retuned //
    if (encode === false) {shift *= -1} // If encode is indeed false, I multiply the shift by negative 1 and use this to decode later on //
    const arr = [] // Setting up an empty array as a placeholder //
    const text = input.toLowerCase() // Here I take into account the edge case of capital letters being included in the input and convert them all to lower case //
    for (let i = 0; i < text.length; i++) { // here I'm setting up a loop by getting the length of the input and incrementing by one //
      let iteration = text.charCodeAt([i]) // Here I'm using the .charCodeAt() method to access the character code sheet and get the appropriate number of the letter //
      if (iteration < 97) { 
   arr.push(iteration) // if the number is less than 97 without the shift applied, I'm pushing that number to the empty array //
   }
   else if (iteration + shift < 97){ // if the number is below 97 WITH the shift applied, I'm adding 26. This will loop around to the other side of the alphabet avaiding unwanted characters. //
     iteration += 26
     arr.push(iteration + shift)
   } 
   else if (iteration + shift > 122) {
    iteration -= 26
    arr.push (iteration + shift)
   }
    else {arr.push(iteration + shift)}
   // console.log("string", arr)
    }
    return String.fromCharCode(...arr)
  }

  return {
    caesar,
  }; 
})();

module.exports = { caesar: caesarModule.caesar };
