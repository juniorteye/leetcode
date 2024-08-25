function minimumCharactersForWords(words) {
    // Write your code here.
    let res = [];
    const wordObj = {};
  
    for(let i =0; i < words.length; i++){
      const tempWordsObj = {};
  
      for(let j = 0; j < words[i].length; j++){
        const letter = words[i][j];
  
        if(wordObj[letter] === undefined){
          wordObj[letter] = 1;
          tempWordsObj[letter] = 1;
          continue;
        }
        tempWordsObj[letter] = tempWordsObj[letter] + 1 || 1;
        if(wordObj[letter] < tempWordsObj[letter])
          wordObj[letter] += 1;
      }
    }
    Object.entries(wordObj).map(([key,val])=>{
      if(val === 1) return res.push(key);
  
      for(let i = 0; i < val; i++){
        res.push(key);
      }
    })
    return res;
  }
  