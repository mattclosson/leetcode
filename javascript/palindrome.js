// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function(x) {
    let array = x.toString(10).split("").join("")
    let reversed = x.toString(10).split("").reverse().join("")
    if(array == reversed) {
        return true
    } else {
        return false
    }
};

isPalindrome(121)