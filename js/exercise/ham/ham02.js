// Lesson 01
function square(number) {
    return number**2;
}
// console.log(square(6));

// Lesson 02
function circleS(r) {
    return 3.14 * Math.pow(r,2);
}
function circleV(r) {
    return 2 * 3.14 * r;
}

// console.log(circleS(3));
// console.log(circleV(3));

// Lesson 03
function factorial(n){
    if(n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// console.log(factorial(5));

// Lesson 04
function isNumber(str) {
    if(!isNaN(str)) {
        return true;
    } else
        return false;
}

// Lesson 05
function min(a, b, c) {
    if(a < b && a < c) return a;
    else {
        if(b < c) return b;
        else return c;
    }
}
// console.log(min(17, 15, 16));

// Lesson 06
function iPositive(number) {
    if(number % 1 === 0 && number >= 0) return true;
    return false;
}

// Lesson 07
function swap(a, b) {
    let c = a;
    a = b;
    b = c;
}

// Lesson 08
function reverse(arr) {
    let right = arr.length - 1;
    let left = 0;
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

// Lesson 09
function countlocatedIn(str, char) {
    let i = 0;
    let count = 0;

    while(i < str.length - 1) {
        if(str[i] === char) {
            count++;
        }
        i++;
    }
    if(count == 0) 
        return -1;
    else return count;
}

console.log(countlocatedIn("Nguyen Huu Hiep", 'e'));