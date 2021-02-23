function count(arr, callback) {
    // TODO: calculate and return the number of values in arr
    // that when passed to the callback function, evaluate to `true`.
}

const numbers = [1, 2, -3, 4, 5, -6, 7, 8];

const evens = numbers.filter(n => n % 2 === 0 || n === 0);
console.log('evens:', evens);

const negatives = numbers.filter(n => n < 0);
console.log('negatives:', negatives);

const fruit = ['apple', 'orange', 'apple', 'banana', 'kiwi', 'apple'];
const apples = fruit.find(f => f === 'apple');
console.log('apples:', apples);