export function countLettersAndDigits(input) {
   let total=[];
   let numero= input.length;
   for(let i=0; i<numero; i++){
      if(input.charCodeAt(i)>= 48 && 
         input.charCodeAt(i)<=57){
            total.push(input.charCodeAt(i))
         }
      if(input.charCodeAt(i)>= 65 && 
         input.charCodeAt(i)<=90){
            total.push(input.charCodeAt(i))
         } 
      if(input.charCodeAt(i)>= 97 && 
         input.charCodeAt(i)<=122){
            total.push(input.charCodeAt(i))
         }
         
   }
   return total.length
}
 