function nextGreaterElement(array){
    let stack  = [];
    const n = array.length;
    
    for(let i = 0; i < n; i++){
      let currentValue = array[i];
      let nextGreater = -1; // Default value if no greater element is found
      
      for(let j = 1; j < n; j++) {
        let nextIndex = (i + j) % n; // Calculate the next index in a circular manner
        console.log('the next index is >>>', nextIndex)
        if(array[nextIndex] > currentValue) {
          nextGreater = array[nextIndex];
          break;
        }
      }
      stack.push(nextGreater);
    }
    return stack;
  }
  console.log(nextGreaterElement([0, 0, 5, 0, 0, 3, 0, 0]));