//Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn,  in ra các phần tử trong mảng.
function lesson01() {
  let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];

  for(var i = 0; i < a.length; i++) {
    console.log(`row ${i}`);
    for(var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
  }
}
// lesson01();

//Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
function lesson02() {
  let str = ['c', 's', 'c', 2, 6, 1];
  let end = str.length - 1;

  for(var i = 0; i < str.length/2; i++) {
    let temp = str[i];
    str[i] = str[end];
    str[end] = temp;
    end--; 
  }
  console.log(str);
}
// lesson02();

//Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng. Chương trình này đếm số ký tự số trong mảng.
function lesson03() {
  let str = ['c', 's', 'c', 2, 6, 1];

  for(var i = 0; i < str.length; i++) {
    let number = parseInt(str[i]);
    if(!isNaN(number)) {
      console.log(str[i]);
    }
  }
}
//lesson03();

//Bài 4: Viết một chương trình để đếm số từ trong một chuỗi
function lesson04() {
  let str = ['c', 's', 'c', 2, 6, 1];
  let count = 0;

  for(var i = 0; i < str.length; i++) {
    if(!isNaN(str[i])) {
      count++;
    }
  }
  console.log(count);
}
//lesson04();

//Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không
let a = [5, 6 , 7];
let b = [5, 6 , 7];
let c = [6, 5, 4];
function lesson05(a, b) {
  if(a.length != b.length) {
    return false;
  }
  for(var i = 0; i < a.length; i++) {
    if(a[i] != b[i]) {
      return false;
    }
  }
  return true;
}
// console.log(lesson05(a,c));

//Bài 6: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
function lesson06() {
  var str = ["Nguyen", "-", "Huu", "-", "Hiep"];

  for(var i = 0; i < str.length; i++) {
    if(str[i] == '-') {
      str[i] = '_';
    }
  }
  console.log(str);
}
lesson06();