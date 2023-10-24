function isPrime(number) {
    let flag = true;
    if(number <= 1) flag = false;
    for(let i = 2; i < Math.sqrt(number); i++) {
        if(number % i == 0) flag = false;
    }
    return flag;
}

let prime = '';
let numbers = [2, 3, 5, 7, 9, 11, 0, 4, 6];
for(let i = 0; i < numbers.length; i++) {
    if(isPrime(numbers[i])) prime += numbers[i] + ", ";
}
console.log(prime);