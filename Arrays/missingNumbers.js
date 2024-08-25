function missingNumbers(nums) {
    const length = nums.length + 2;
    let result = []
  
    for(let i = 1; i <= length; i++){
      if(nums.indexOf(i)=== -1){
        console.log(nums.indexOf(i))
        result.push(i)
        
      }
    }
    return result;
  }
  
  // Example usage
  
  
  // Do not edit the line below.
  console.log(missingNumbers([1,4,3])); // Output
  