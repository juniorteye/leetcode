function firstNonRepeatingCharacter(string) {
    // Write your code here.
    const hash = {};
    for(char of string)
      hash[char] = (hash[char] || 0) + 1;
  
    for(let idx = 0; idx < string.length; idx++)
      if(hash[string[idx]] === 1) return idx;
    return -1;
  }