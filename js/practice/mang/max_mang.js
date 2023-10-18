let numbers = [-3, 5, 1, 8, 10, 0];
let max = numbers[0];
let index = 0;
let i = 1;

while(i < numbers.length) {
    if(numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
    i++;
}
console.log(`Max = ${max} at position ${index}`);