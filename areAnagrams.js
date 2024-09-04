// Write a function that checks if two strings are anagrams.

// function areAnagrams(str1, str2) {
//     const normalize = str => str.split("").sort().join()

//     return normalize(str1) === normalize(str2)
// }

function areAnagrams(str1, str2) {
    if(str1.length !== str2.length) return false

    function count(str) {
        const map = new Map()
        for(let char of str) {
            map.set(char, ( map.get(char) || 0 ) + 1)
        }
        return map
    }

    const count1 = count(str1)
    const count2 = count(str2)

    for(let key of count1.keys()) {
        if(count1.get(key) !== count2.get(key)) {
            return false
        }
    }

    return true
}

console.log(areAnagrams('listen', 'silent')); 
console.log(areAnagrams('aabbcc', 'abcabc')); 
console.log(areAnagrams('hello', 'bello')); 
