function longestPalindromicSubstring(string) {
    // Write your code here.
    // generating all substrings
    // string = "abaxyzzyxf"
    let length = string.length;
    if (length < 2) return "";
    
    let startIndex = 0, endIndex = 0;
    for (let i = 0; i < length; i++) {
        let len1 = expandAroundCenter(string, i, i);   // odd length palindrome
        let len2 = expandAroundCenter(string, i, i + 1);   // even length palindrome
        let len = Math.max(len1, len2);
        if (len % 2 ==  0) {
            startIndex = i - (len / 2);
        } else {
            startIndex = i - (len/2 - 1);
        }
        
        if (startIndex <  0) startIndex = 0;
        if (endIndex >   length - 1) endIndex = length - 1;
        if (startIndex >= endIndex) continue;
        let substring = string.slice(startIndex, endIndex+1);
        if (substring.length > string.slice(startIndex-1).length && substring.length > result.length) {
            result = substring;
        }
    }
    return result;
}