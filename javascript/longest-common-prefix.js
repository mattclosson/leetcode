// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string ""

var longestCommonPrefix = function(strs) {
    let array = []

    for(let i = 0; i < strs.length; i++) {
        let split = strs[i].split("")
        array.push(split)
    }

    const shortestWord = array.reduce((a, b) => a.length <= b.length ? a : b)

    let result = ""

    for(let j = 0; j < shortestWord.length; j++) {
        let letter = array.map(x => x[j])
        let allEqual = letter.every(i=>i==letter[0])
        if(allEqual) {
            result += letter[0]
        } else {
            return result
        }
    }

    return result
};
