// numbers
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
let evenNumbers = evenNumbers.filter(evenNumbers => evenNumbers < 0);    // TODO: assign to an array containing only the even numbers
let oddNumber = oddNumber.find(oddNumber => oddNumber === '1');      // TODO: assign to the first odd number
let largestNumber = largestNumber.indexOf(101);  // TODO: assign to the largest number
console.log('evenNumbers:', evenNumbers);
console.log('oddNumber:', oddNumber);
console.log('largestNumber:', largestNumber);

// strings
const strings = ["this", "is", "a", "collection", "of", "words"];
let onlyIs;         // TODO: assign to an array with only the string containing the substring `is`
let longestWord;    // TODO: assign to the longest word in strings
console.log('onlyIs:', onlyIs);
console.log('longestWord:', longestWord);

// objects
const orders = [
    { price: 45.0, status: "processed" },
    { price: 20.0, status: "pending" },
    { price: 60.0, status: "pending" },
    { price: 15.0, status: "processed" }
];
let allPrices;      // TODO: an array with only the price values from all of the orders
let pendingOrders;  // TODO: an array containing only the orders that are pending
let total;          // TODO: the total sum of all the prices
console.log('allPrices:', allPrices);
console.log('pendingOrders:', pendingOrders);
console.log('total:', total);