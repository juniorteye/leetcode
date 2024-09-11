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
    let StartIndex = 0
    let lastIndex = string.length-1
    while(StartIndex <lastIndex ) {
        if(string[StartIndex] !== string[lastIndex]){
            return false
        }
        StartIndex++
        lastIndex--
    }
    return true
  }
console.log(isPalindrom("abcdcba"))