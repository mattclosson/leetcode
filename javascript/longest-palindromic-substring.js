// Given a string s, return the longest palindromic substring in s.

var longestPalindrome = function(s) {
    let p = ""
    let array = s.split("")

    console.log(array)
    for(let i = 0; i < array.length; i++) {
        let l = i, r = i

        while (r + 1 < array.length && s[r+1] === s[i]) {
            r++
        }

        if (p.length && p.length >= Math.min(l, s.length - (r + 1)) * 2 + (r + 1 - l)) {
            break;
        }
        
        while (l > 0 && r < s.length - 1) {
            if (s[l - 1] !== s[r + 1]) {
              break;
            }
    
            l -= 1;
            r += 1;
          }

        if (r + 1 - l > p.length) {
            p = s.substring(l, r + 1);
        }
    }
    return p
};

console.log(longestPalindrome("aacabdkacaa"))