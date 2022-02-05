// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
    let sum = 0
    const nums = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let array = s.split("")

    for(let i = 0; i < array.length;  i++) {
        const current = nums[array[i]]
        const next = nums[array[i+1]]
        
        if(current < next) {
            sum += (next - current)
            i++
        } else {
            sum += current
        }
    }

    return sum
};

romanToInt("MCMXCIV")