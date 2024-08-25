function moveElementToEnd(array, toMove) {
    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
      if (array[left] === toMove && array[right] !== toMove) {
        [array[left], array[right]] = [array[right], array[left]]; // Swap elements
        left++;
        right--;
      } else {
        if (array[left] !== toMove) left++;
        if (array[right] === toMove) right--;
      }
    }
    return array;
  }
  
  const exampleArray = [2, 3, 1, 4, 2, 2, 5, 2];
  const elementToMove = 2;
  
  const result = moveElementToEnd(exampleArray, elementToMove);
  console.log(result);
  