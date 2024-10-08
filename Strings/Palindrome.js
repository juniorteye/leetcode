function isPalindromes(string){
    //PREP
    // non empty  string check
    // boolean to check if string is palindrome 
    // single string are Palindrome. 
    let Is_pal = true;
    let str = string.toLowerCase();
    let stringReverse = str.split("").reverse().join("");
    //LOGIC
    if(str === stringReverse){
       return Is_pal;
    }
    else{
        Is_pal = false
    }
    return  Is_pal;
}
console.log(isPalindromes('abcdcba'))


//best solution of Time complexity of o(n) and space complexity of o(1)
function isPalindrome(string) {
    // Write your code here.
    let left = 0; let right = string.length-1
    if(string.length === 0) return false
    while(left < right){
      if(string[left] !== string[right]){
        return false
      }
      left++
      right--
    }
    return true
  }