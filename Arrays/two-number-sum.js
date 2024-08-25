function twoNumberSum(array, targetSum) {
    let returnArray = [];
  
    for (let i = 0; i < array.length - 1; i++) {
        console.log('i is',array[i])
      for (let j = i + 1; j < array.length; j++) {
        console.log('j is',array[i+1])
        if (array[i] + array[j] === targetSum) {
          returnArray = [array[i], array[j]].sort((a, b) => a - b);
          return returnArray;
        }
      }
    }
  
    return returnArray;
  }
//  solution 2

console.log(twoNumberSum( [3,5,-4,8,11,1,-1,6],10))


function findPairsWithSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(`i = ${i}, j = ${j}, Pair: (${array[i]}, ${array[j]})`);
            if (array[i] + array[j] === targetSum) {
                console.log(`Pair found: (${array[i]}, ${array[j]})`);
            }
        }
    }
}

findPairsWithSum([3, 5, 2, 8, 4, 7], 10);
