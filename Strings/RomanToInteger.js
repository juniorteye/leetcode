/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let variables = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000, 
    }

    let results = 0;
    for(let i = 0; i< s.length; i++){
        let curr = variables[s[i]]
        let nextVal = variables[s[i+1]]
        if(curr < nextVal){
            results += nextVal - curr
            i++  
        }
        else{
            results += curr
        }
    }
    return results
};