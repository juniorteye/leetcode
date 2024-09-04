// function isPalindrome(string) {
//     // Write your code here.

//     let  reversedString = string.split('').reverse().join('');
//     if (string === reversedString){
//         return true;
//     } else{
//         return false;
//     }
//   }
// console.log(isPalindrome("abcdmba"))

function isPalindrom(string) {
    // Write your code here.
    let startIndex = 0
    let lastIndex = string.length-1
    while(startIndex <lastIndex ) {
        if(string[startIndex] !== string[lastIndex]){
            return false
        }
        startIndex++
        lastIndex--
    }
    return true
  }
console.log(isPalindrom("abcdcba"))