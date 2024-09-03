// Implement a function countBy(array, iteratee) that creates an object composed of 
// keys generated from the results of running each element of array through iteratee. 
// The corresponding value of each key is the number of times the key was returned by 
// iteratee.

function countBy(array, iteratee) {
  return array.reduce((result, curr) => {
    if (!(iteratee(curr) in result)) {
      result[iteratee(curr)] = 0;
    }
    result[iteratee(curr)]++;
    return result
  }, {});
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor))