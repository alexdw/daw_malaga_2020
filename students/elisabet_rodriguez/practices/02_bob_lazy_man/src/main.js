export function countLettersAndDigits(input) {
  let totalChars = 0; 
  for(let i = 0; i < input.length; i++){
    if(input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57){
        totalChars += 1
    }
    if(input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90){
      totalChars += 1
    }
    if(input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 192){
      totalChars += 1
    }
  }
  return totalChars
}