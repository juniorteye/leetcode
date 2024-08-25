function isValidSubsequence(array, sequence) {
  let idx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[idx]) {
      idx++;
    }
  }
  return idx === sequence.length;
}

// solution Two:
function isValidSubsequence(array, sequence){
    let arrayIndex = 0;
    let sequencyIndex = 0;
  
    for(;arrayIndex < array.length && sequencyIndex < sequence.length;){
      if(array[arrayIndex] === sequence[sequencyIndex]){
        sequencyIndex++;
      }
      arrayIndex++;
    }
    return sequencyIndex === sequence.length;
}
  
