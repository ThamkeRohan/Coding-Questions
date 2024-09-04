// Write a function that finds the maximum value in a given array.

// function findMax(arr) {
//     return Math.max(...arr)
// }

function findMax(arr) {
    return arr.reduce((currMax, elem) => {
        if(elem > currMax) {
            return elem
        } else {
            return currMax
        }
    }, -Infinity)
}
console.log(findMax([-1, -3, -7, -2, -5]));