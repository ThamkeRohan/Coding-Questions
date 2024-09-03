// Implement a function minBy(array, iteratee) that finds the element inside array with the minimum value after going through iteratee.

function minBy(array, iteratee) {
    //Get first valid value
    let i = 0
    while(iteratee(array[i]) == null) {
        i++
        //No valid value in entire array
        if(i >= array.length) return 
    }

    //Finding min
    let currMin = array[i]
    for(; i < array.length; i++) {
        if(iteratee(array[i]) < iteratee(currMin)) {
            currMin = array[i]
        }
    }

    return currMin
}

// console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.m));

// console.log(minBy([{ n: 1 }], (o) => o.n));

// console.log(
//   minBy([{ n: 1, m: 3 }, { n: 0, m: 2 }, { n: 2 }, { n: 0 }], (o) => o.m)
// );