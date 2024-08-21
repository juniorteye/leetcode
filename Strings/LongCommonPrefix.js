/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

   let prefix = strs[0]; // Start with the first string as the initial prefix
   for (let i = 1; i < strs.length; i++) {
       while (strs[i].indexOf(prefix) !== 0) {
           prefix = prefix.substring(0, prefix.length - 1); // Trim the prefix
           if (prefix === "") return ""; // No common prefix
       }
   }
   return prefix;
};