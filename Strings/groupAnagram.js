function groupAnagrams(words){
    let anagram = {}
    for(let word of words){
        let sortedWords = word.split('').sort().join('')
        if(sortedWords in anagram){
            anagram[sortedWords].push(word)
            console.log('anagram value is >>>', anagram)
        }else{
            anagram[sortedWords]=[word]
            console.log('when the value is part of anagram, anagram becomes>>', anagram)
        }
    }
    return Object.values(anagram)
}

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]))