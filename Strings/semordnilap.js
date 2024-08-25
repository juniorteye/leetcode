function semordnilap(words) {
   
        // Write your code here.
       const wordSet = new Set()
       const pairs  = []
      for(const word  of words){
        const reversed = word.split("").reverse().join("")
        if(wordSet.has(reversed)) pairs.push([word, reversed])
        else wordSet.add(word)
      }
    return pairs
}