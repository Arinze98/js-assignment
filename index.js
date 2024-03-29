// Reverse a String:
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString('hello')); // Output: 'olleh'

//     Count Characters:
function countCharacters(str) {
    return str.length;
}

// Example usage:
console.log(countCharacters('Hello, world!')); // Output: 13

//     Capitalize Words:
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

// Example usage:
console.log(capitalizeWords('this is a sentence')); // Output: 'This Is A Sentence'

//     Find Maximum and Minimum:
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Example usage:
console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
console.log(findMin([3, 7, 2, 9, 5])); // Output: 2

//     Sum of Array:
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

//     Filter Array:
function filterArray(arr, condition) {
    return arr.filter(element => condition(element));
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(filterArray(numbers, num => num > 2)); // Output: [3, 4, 5]

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120

// Prime Number Check:
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrime(17)); // Output: true
console.log(isPrime(15)); // Output: false

//     Fibonacci Sequence:
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
