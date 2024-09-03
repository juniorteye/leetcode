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
    let LastIndex = string.length-1
    while(StartIndex <LastIndex ) {
        if(string[StartIndex] !== string[LastIndex]){
            return false
        }
        StartIndex++
        LastIndex--
    }
    return true
  }
console.log(isPalindrom("abcdcba"))