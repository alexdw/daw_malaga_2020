export const spam = (str) => {
  let strArr = Array.from(str)
  let changeLetter= strArr.map(function(letter){
    if(letter==="a"||letter==="e"||letter==="o"||letter==="u"){
    letter= "i" 
    }else if(letter==="A"||letter==="E"||letter==="O"||letter==="U"){
    letter = "I"
    }else{
    letter= letter
    }
    return letter
    
     })
  let final= changeLetter.join("")
  return final

}

