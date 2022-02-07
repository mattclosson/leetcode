var lengthOfLongestSubstring = function(s) {
    let array = s.split("")

    let sub = []
    let longestLen = 0
    for(let i = 0; i < array.length; i++) {
        while(sub.includes(array[i])) {
            sub.reverse()
            sub.pop()
            sub.reverse()
        }
        sub.push(array[i])
        if(sub.length > longestLen) {
            longestLen = sub.length
        }
    }
    console.log(longestLen)
    
    return longestLen
};

lengthOfLongestSubstring(" ")