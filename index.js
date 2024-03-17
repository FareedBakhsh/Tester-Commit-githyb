// JavaScript Code Example

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to generate a random number between min and max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display a greeting message
function greet(name) {
    console.log(`Hello, ${name}! Welcome to our website.`);
}

// Example usage of the functions
console.log("Area of rectangle with length 5 and width 4:", calculateRectangleArea(5, 4));
console.log("Is 7 an even number?", isEven(7));
console.log("Reverse of 'Hello':", reverseString("Hello"));
console.log("Random number between 1 and 100:", generateRandomNumber(1, 100));
greet("Alice");
