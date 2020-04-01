export function countLettersAndDigits(input) {
    let letras="abcdefghijklmnñopqrstuvwxyz",
        numeros = "0123456789",
        cuenta = 0;

    input = input.toLowerCase();

    for(let i = 0; i < input.length; i++){
        if(letras.indexOf(input.charAt(i),0)!= -1 || numeros.indexOf(input.charAt(i),0)!= -1){
            cuenta += 1;
        }
    }
    
    return cuenta;
}