// Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

function cycle(...values) {
  let index = 0
  return () => {
    const currValue = values[index]
    index = (index + 1) % values.length
    return currValue
  }
}

const onOffFn = cycle("on", "off");
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"