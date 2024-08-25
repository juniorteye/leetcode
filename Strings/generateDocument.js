function generateDocument(characters, document){
    // Write your code here.
    const charactersMap = {};
    for(const ch of characters){
      if(!(ch in charactersMap)) charactersMap[ch] = 0;
      charactersMap[ch]++;
    }
  
    for(const ch of document){
      if(!(ch in charactersMap) || charactersMap[ch] === 0) return false;
      charactersMap[ch]--;
    }
    return true
  }