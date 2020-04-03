export const toWeirdCase = (text) => {
   let textoArr = text.split(" ")
   
   let textoMini = Array.from(textoArr, (word,i) => {
         if(i%2===0){
            return word.toUpperCase()
         }
         return word
   }).join(" ")
   return textoMini
}