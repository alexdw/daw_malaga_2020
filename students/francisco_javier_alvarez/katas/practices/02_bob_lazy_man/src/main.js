export function countLettersAndDigits(input) {
    let total = 0 ;

    for (let i = 0; i <= input.length; i++){
       if( isLetter( input.charAt( i ) ) ) total ++;
       if( isDigit( input.charAt( i ) ) ) total ++;
    }

    return total;
   
    function isLetter(char){
        char = char.toUpperCase();
        let code = char.charCodeAt(0);
        return (code>= 65 && code <= 90)
    }
    function isDigit(char){
        let code = char.charCodeAt(0);
        return (code >= 48 && code <= 57);
    }
}