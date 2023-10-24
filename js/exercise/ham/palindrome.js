function isPalindrome(str) {
    // Loại bỏ khoảng trắng và chuyển đổi chuỗi thành chữ thường.
    str = str.replace(/\s/g, '').toLowerCase();
    
    // Base case: nếu chuỗi rỗng hoặc chỉ còn một ký tự, nó là chuỗi palindrome.
    if (str.length <= 1) {
      return true;
    }
    
    // So sánh ký tự đầu và cuối của chuỗi.
    if (str[0] === str[str.length - 1]) {
      // Nếu giống nhau, tiếp tục kiểm tra chuỗi con bên trong.
      return isPalindrome(str.slice(1, -1));
    } else {
      // Nếu không giống nhau, chuỗi không phải là palindrome.
      return false;
    }
  }
  
console.log(isPalindrome('rotor'));