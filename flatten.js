// Implement a function flatten that returns a newly-created array with all 
// sub-array elements concatenated recursively into a single level.

function flatten(arr) {
    return arr.reduce((acc, value) => {
        if(Array.isArray(value)) {
            return [...acc, ...flatten(value)];   
        }
        else {
            return [...acc, value];
        }
    }, [])
}

console.log(flatten([[], [[]], [[], [[[]]]]]));