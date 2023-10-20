let arrFloat = [1.23, -1.56, 1.02, 3.69, -0.36, 7.56];

// Bài 1: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực
//Lesson 01:
function caclSumMaxFrontNumber(arr) {
    let total = 0;

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i-1]) {
            total += arr[i]; 
        }
    }
    return total.toFixed(2);
}
// console.log(caclSumMaxFrontNumber(arrFloat));

// Bài 2: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực
//Lesson 2:
function caclAVGNumber(arr) {
    let total = 0;
    let count = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            total += arr[i];
            count++;
        }
    }
    if(count != 0) {
        let avg = total / count;
        return avg.toFixed(2);
    } else {
        return -1;
    }
}
// console.log(caclAVGPositiveNumber(arrFloat));

// Bài 3: Đưa các số chia hết cho 3 về đầu mảng
//Lesson 3:
let arrNumber = [1, 3, 5, 6, 8, 9];

function takeNumberHeadArray(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 3 == 0) {
            let temp = arr[i];
            //Các mảng dời lui bên phải đến i
            for(var j = i; j >= 0; j--) {
                arr[j] = arr[j-1]
            }
            arr[0] = temp;
        }
    }
    console.log(arr);
}
// takeNumberHeadArray(arrNumber);

// Bài 4: Đảo ngược mảng ban đầu
//Lesson 04:
function reverseArr(arr) {
    var end = arr.length - 1;

    for(var i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        end--;
    }
    console.log(arr);
}
// reverseArr(arrNumber);

// Bài 5: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước
//Lesson 05:
function listSectionOfXY(arr, x, y) {
    let arrNew = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= x && arr[i] <= y) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}
// console.log(listSectionOfXY(arrFloat, 0, 2));

// Bài 6: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó
//Lesson 06
function listLagerNumberAbsBeHind(arr) {
    let arrNew = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > Math.abs(arr[i + 1])) {
            arrNew.push(arr[i]);
        }
    }

    return arrNew;
}
// console.log(listLagerNumberAbsBeHind(arrFloat));

// Bài 7: Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên
//Lesson 07:
function listIndexOrthograph(arr) {
    let index = [];

    for(var i = 0; i < arr.length; i++) {
        if((arr[i] ** 0.5) % 1 == 0) {
            index.push(i);
        }
    }
    return index;
}
// let arrNumber07 = [3, 6, 9, 14, 20, 16, 14, 1, 25];
// console.log(listIndexOrthograph(arrNumber01));

// Bài 8: Đếm số dương chia hết cho 7 trong mảng
//Lesson 08:
function countDivisible7(arr) {
    let count = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0 && arr[i] % 7 == 0) {
            count++;
        }
    }
    return count;
    
}
let arrNumber08 = [14, 5, 6, 12, 7, 21, 28, 16, 4];
// console.log(countDivisible7(arrNumber08));

// Bài 9: Đếm số nguyên tố trong mảng
//Lesson 09
function countPrime(arr) {
    let count = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] <= 1) { continue;}
        if(arr[i] == 2 || arr[i] == 3) {
            count++;
            continue;
        }
        if(arr[i] % 2 != 0 || arr[i] % 3 != 0) {
            count++;
        }
    }
    return count;
}
console.log(countPrime(arrNumber08));

// Bài 10: Hãy xác định số lượng phần tử kề nhau mà cả 2 đều chẵn
//lesson 10:
function evenNumberAjacent(arr) {
    let count = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
            count++;
        }
    }
    return count;
}
let arrNumber10 = [10, 2, 4, 5, 8, 6, 11, 13];
// console.log(evenNumberAjacent(arrNumber10));

// Bài 11: Kiểm tra mảng có đối xứng không? Có trả về 1, không có trả về 0
//Lesson 11:
function symmetricArr(arr) {
    let i = 0;
    let j = arr.length - 1;

    if(arr.length % 2 != 0) {
        return 0;
    }
    while(i < arr.length/2) {
        if(arr[i] != arr[j]) {
            return 0;
        }    
        i++;
        j--;
    }
    return 1;
}
let arrNumber11 = [2, 4, 6, 6, 4, 1];
// console.log(symmetricArr(arrNumber11));

// Bài 12: Kiểm tra mảng có tăng dần hay không

function ascendingArr(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]) {
            return 0;
        }
    }
    return 1;
}
let arrNumber12 = [1, 3, 5, 7, 4];
// console.log(ascendingArr(arrNumber12));

// Bài 13: Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không
function includeArrAB(arrA, arrB) {
    if(arrA.length > arrB.length) {
        return false;
    }
    for(var i = 0; i < arrA.length; i++) {
        let count = 0;
        for(var j = 0; j < arrB.length; j++) {
            if(arrA[i] == arrB[j]) {
                count++;
            }
        }
        if(count == 0) {
            return false;
            break;
        }
    }
    return true;
}

// let a = [1, 2, 3];
// let b = [1, 2, 3, 4, 5];
// console.log(includeArrAB(a,b));
// let allElementsInB = a.every(element => b.includes(element));

// console.log(allElementsInB); // Kết quả: true

// Bài 14: Kiểm tra ma trận 2 chiều có toàn dương hay không
function dimensionalMatrix(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] < 0) {
                return false;
            }
        }
    }
    return true;
}
let arrNumber14 = [
    [6, 2, 1],
    [3, 1, 0]
]
// console.log(dimensionalMatrix(arrNumber14));

// Bài 15: Kiểm tra một cột ma trận có giảm dần hay không
function matrixDescending(matrix, columnIndex) {
    for(var i = 1; i < matrix.length; i++) {
        if(matrix[i][columnIndex] >= matrix[i-1][columnIndex]) 
            return false;
    }
    return true;
}
// console.log(matrixDescending(arrNumber14));

// Bài 16: Kiểm tra ma trận có tồn tại số lẻ hay không
function matrixOddNumbers(matrix) {
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] % 2 != 0) {
                return true;
            }
        }
    }
    return false;
}

// Bài 17: Liệt kê các dòng giảm dần trong ma trận
function matrixDescendingCurrent(matrix) {
    let matrixNew = [];
    let index = 0;

    for(var i = 0; i < matrix.length; i++) {
        let flag = true;

        for(var j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] > matrix[i][j-1]){
                flag = false;
            }
        }
        if(flag) {
            matrixNew[index] = matrix[i];
            index++;
            continue;
        }
    }
    return matrixNew;
}
var matrix = [
    [52, 17, 15],
    [5, 9, 14],
    [31, 18, 13],
    [2, 700, 12],
    [1, 6, 11]
  ];
// console.log(matrixDescendingCurrent(matrix));

// Bài 18: Tìm số chẵn đầu tiên trong ma trận
function matrixFirstEvenNumber(matrix) {
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] % 2 == 0) {
                return matrix[i][j]; 
            }
        }
    }
    return -1;
}
// console.log(matrixFirstEvenNumber(matrix));

// Bài 19: Tìm số chẵn lớn nhất trong ma trận
function matrixMaxEvenNumber(matrix) {
    let max = matrixFirstEvenNumber(matrix);
    
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] % 2 == 0 && matrix[i][j] >= max) {
                max = matrix[i][j];
            }
        }
    }
    return max;
}
// console.log(matrixMaxEvenNumber(matrix));

// Bài 20: Liệt kê các dòng có tổng lớn nhất
function matrixMaxTotalRow(matrix) {
    let totalMax = 0;
    let index;
    for(var i = 0; i < matrix.length; i++) {
        let total = 0;
        matrix[i].forEach(element => {
            total += element;
        });
        if(total > totalMax) {
            totalMax = total;
            index = i;
        }
    }
    return matrix[index];
}
console.log(matrixMaxTotalRow(matrix));