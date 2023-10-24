let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];

function min(numbers) {
    if(numbers.length == 0) {
        return 'Array does not exist value';
    }
    let min = numbers[0];
    numbers.forEach(number => {
        if(number < min) {
            min = number;
        }
    });
    return min;
}
console.log(min(arr1));
console.log(min(arr2));
console.log(min(arr3));
console.log(min(arr4));