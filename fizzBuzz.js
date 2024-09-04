// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz")
        else if(i % 3 === 0) console.log("Fizz")
        else if(i % 5 === 0) console.log("Buzz")
        else console.log(i)
    }
}

fizzBuzz()