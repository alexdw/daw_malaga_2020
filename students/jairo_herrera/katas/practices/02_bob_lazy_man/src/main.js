export function countLettersAndDigits(input) {
  let total = 0;

  for (let a=0; a<=input.length; a++){
   if (isLetter( input.charAt(a) ) ) total++;
    
    // si es letra sumo 1
if (isDigit(input.charAt(a)   ) ) total++;
    // si es digito sumo 1
}

  return total
}

function isLetter(char){
  let code = char.charCodeAt(0);
  return (code>=65 && code <=90) || (code>=96 && code<=122);
}
function isDigit(char){
  let code = char.charCodeAt(0);
  return (code>=48 && code <=57);
}
