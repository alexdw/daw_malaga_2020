// necesito los codigos ASCII (como entiende el ordenador los caracteres)
//cha es cada caracter el input 

export function countLettersAndDigits(input) {
  let total = 0 

  for(let a=0; a<=input.length; a++){
      if(isLetter(input.charAt(a))) total ++
      if(isDigit(input.charAt(a))) total ++
  }
  return total 
}


function isLetter(char){
  let code = char.charCodeAt(0);
  return (code>= 65 && code<=90) || (code>=96 && code <=122);
}

function isDigit(char){
  let code = char.charCodeAt(0);
  return (code>=48 && code<=57);
}
