function closestPair(arr1, arr2) {
    arr1.sort((a, b) => a - b); // Sort the arrays to efficiently compare elements
    arr2.sort((a, b) => a - b);
  
    let idx1 = 0;
    let idx2 = 0;
    let minDiff = Number.POSITIVE_INFINITY;
    let closestPair = [];
  
    while (idx1 < arr1.length && idx2 < arr2.length) {
      const diff = Math.abs(arr1[idx1] - arr2[idx2]);
  
      // Update the closest pair if a smaller difference is found
      if (diff < minDiff) {
        minDiff = diff;
        closestPair = [arr1[idx1], arr2[idx2]];
      }
  
      // Move the pointers based on the comparison of elements
      if (arr1[idx1] < arr2[idx2]) {
        idx1++;
      } else if (arr1[idx1] > arr2[idx2]) {
        idx2++;
      } else { // If the elements are equal, return immediately
        return [arr1[idx1], arr2[idx2]];
      }
    }
  
    return closestPair;
  }
  
  // Example usage:
  const array1 = [10, 20, 30, 40];
  const array2 = [15, 25, 35, 45];
  const result = closestPair(array1, array2);
  console.log("Closest pair:", result);
  