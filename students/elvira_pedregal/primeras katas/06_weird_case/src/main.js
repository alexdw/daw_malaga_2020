export const toWeirdCase = (text) => {

   let words = text.split(" "); //quitar 
   let wordsWeird = words.map(word => toUpper(word));
   
   return wordsWeird.join(" ")
}

function toUpper(word) {
   let letters = Array.from(word)
   let lettersWeird = letters.map((letter, index) => {
      if (index%2===0) return letter.toUpperCase();
      return letter
   })
   return lettersWeird.join(" ");
}