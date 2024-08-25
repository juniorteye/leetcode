function sortedSquaredArray(array) {
    let left = 0;
    let right = array.length - 1;

    let result = new Array(array.length);
    
    for (let i = array.length - 1; i >= 0; i--) {
      if (Math.abs(array[left]) > Math.abs(array[right])) {
        result[i] = array[left] * array[left];
        left++;
      } else {
        result[i] = array[right] * array[right];
        right--;
      }
    }
  
    return result;
  }
  


console.log(sortedSquaredArray([-2,-1]))

// //solution Two
// function sortedSquaredArray(array) {
//     // Write your code here.
//     let arrsquard;
//     let changenumber = array.map(number => Math.abs(number))
//     let sortedarr = changenumber.sort((a,b)=>{
//       return a - b;
//     });
//     arrsquard =  sortedarr.map((arr)=>{
      
//       return arr ** 2;
//     })
    
//     return arrsquard;
//   }
  
//   // Do not edit the line below.
//   exports.sortedSquaredArray = sortedSquaredArray;