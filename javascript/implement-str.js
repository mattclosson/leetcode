// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    if(!haystack.includes(needle)) return -1
    return haystack.split(`${needle}`)[0].length
};

console.log(strStr(haystack = "javascript", needle = "scrip"))