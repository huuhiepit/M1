const readlineSync = require('readline-sync');

//Thêm một phần tử vào mảng ở một vị trí bất kỳ
// let element = readlineSync.question("Enter a element: ");
// let index = readlineSync.question("Enter the index into the array: ");

let arrElement = [1, 5, 8, 6];
let arrCars = ["Vinfast", "Mecedes", "Panagi", "KIA", "a", "b"];
//Thêm một phần tử vào đầu mảng
//arrElement[arrElement.length] = element;

//Thêm vào một phần tử ở vị trí bất kì
function pushArray(arr, element, index) {
    if(index < 0 || index > arr.length + 1) {
        return -1;
    }
    for(var i = arr.length; i > index; i--) {
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = element; 
    }
    if(index == arr.length) {
        arr[index] = element;
    }
    return arr;
}

//Xóa một phần tử ở vị trí bất kì
function popArray(arr, index) {
    if(index < 0 || index > arr.length) {
        return -1;
    }
    let newArr = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++) {
        if(i == index) {
            continue;
        }
        newArr[j] = arr[i];
        j++;
    }
    return newArr;
}
console.log(popArray(arrElement, -2));
//Sắp xếp các phần tử trong mảng
function sortArray(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
// sortArray(myArray);
// console.log(myArray);