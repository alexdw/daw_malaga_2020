export const sumOfMinimums = (arr) => {
    function compare(a,b){
        return a - b;
    }

    export const sumOfMinimums = (arr) => {
        let arrayMapped = arr.map(value => value.sort(compare)[0] );
        let total = arrayMapped.reduce((accumulated, current) => accumulated + current);
        return total
    }
}