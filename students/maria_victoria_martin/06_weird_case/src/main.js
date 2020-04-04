export const toWeirdCase = (text) => {
  
  let words = text.split(" ");
  let wordsWeird = words.map( word => weird(word));

  return wordsWeird.join(" ");
  
}

function weird(word){
  let letters = Array.from(word);
  let lettersWeird = letters.map((letter, index)=>{
    if(index%2===0) {
      return letter.toUpperCase();
    }
    return letter;
  })
  return lettersWeird.join("");
}