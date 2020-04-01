export function countLettersAndDigits(input) {
  let total=[];
  let longitudInput = input.lenght;
  for(let i =0; i<longitudInput;i++){
     var letters = /^[A-Za-z]+$/
     if(input.charAt(i)!==NaN || input.charAt(i)===letters ){
        total.push(input.charAt(i))
     }
     return total.lenght 
  }
  
  return total.lenght 
}