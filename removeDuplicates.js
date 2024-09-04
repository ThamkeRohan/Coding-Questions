// Write a function that removes duplicates from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)]
}

console.log(removeDuplicates([1, 2, 1, 3, 4, 5, 5, 6, 7, 8, 6]))

console.log(removeDuplicates([]))