export const isFizz = (num) => num % 3 === 0
export const isBuzz = (num) => num % 5 === 0
export const isFizzBuzz = (num) => (num % 5 === 0 && num % 3 === 0)

export const fizzbuzz = (num) => {

    if (isFizzBuzz(num)) return "FIZZBUZZ"
    if (isFizz(num)) return "FIZZ"
    if (isBuzz(num)) return "BUZZ"

    return num.toString()
}