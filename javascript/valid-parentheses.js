// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    let stack = []
    let obj = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    for(let i = 0; i < s.length; i++) {
        if(stack.length > 0 && obj[stack[stack.length - 1]] === s[i]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0;
};

console.log(isValid(s = "([])()[()]"))