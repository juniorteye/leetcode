function runLengthEncoding(string) {
    // Write your code here.
    let count = 0;
    let chars = [];
  
    // Loop over string
    for(let i = 0; i < string.length; i++){
      // Add one per loop
      count += 1;
  
      if(count === 9 || string[i] !== string[i + 1]){
        // build chars
        chars.push(count, string[i]);
  
        // reset the count
        count = 0;
      }
    }
    // Join to string
    return chars.join("")
}
  