// Write a function that finds the most frequent element in a given array.

function mostFrequent(arr) {
    const map = new Map()

    arr.forEach(elem => {
        map.set(elem, ( map.get(elem) || 0) + 1)
    })

    let freqElem = null
    let maxFreq = 0
    for(let [key, value] of map.entries()) {
        if(value > maxFreq) {
            maxFreq = value
            freqElem = key

        }
    }
    return freqElem
}

console.log(mostFrequent([1, 2, 3, 2, 1, 2])); // Expected Output: 2
