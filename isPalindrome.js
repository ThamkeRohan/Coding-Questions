// Write a function that checks if a given string is a palindrome.

function isPalidrome(str) {
    const reversedStr = str.split("").reverse().join("")

    return reversedStr === str
}

console.log(isPalidrome("Hello"))
console.log(isPalidrome("123321"))