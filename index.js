// EXAMPLE 1 - Sort an Array without Mutation in JavaScript

// ✅ for array of letters
const arr = ['z', 'c', 'a', 'f'];
const result = [...arr].sort();
console.log(result); // 👉️ [ 'a', 'c', 'f', 'z' ]
console.log(arr); // 👉️ [ 'z', 'c', 'a', 'f' ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sort an Array without Mutation using slice()

// // ✅ for numbers
// const arr3 = [8, 4, 12];
// const result3 = arr3.slice().sort((a, b) => a - b);
// console.log(result3); // 👉️ [4, 8, 12]
// console.log(arr3); // 👉️ [8, 4, 12]

// // ✅ for letters
// const arr = ['z', 'c', 'a', 'f'];
// const result = arr.slice().sort();

// console.log(result); // 👉️ ['a', 'c', 'f', 'z']
// console.log(arr); // 👉️ ['z', 'c', 'a', 'f']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Sort an Array without Mutation using Array.from()

// const arr = ['z', 'c', 'a', 'f'];
// const result = Array.from(arr).sort();

// console.log(result); // 👉️ ['a', 'c', 'f', 'z']
// console.log(arr); // 👉️ ['z', 'c', 'a', 'f']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Sort an Array without Mutation using Array.concat()

// const arr = ['z', 'c', 'a', 'f'];
// const result = arr.concat().sort();

// console.log(result); // 👉️ ['a', 'c', 'f', 'z']
// console.log(arr); // 👉️ ['z', 'c', 'a', 'f']

// ------------------------------------------------------------------

// // EXAMPLE 5 - Sort an Array without Mutation using JSON.stringify()

// const arr = ['z', 'c', 'a', 'f'];
// const result = JSON.parse(JSON.stringify(arr)).sort();

// console.log(result); // 👉️ ['a', 'c', 'f', 'z']
// console.log(arr); // 👉️ ['z', 'c', 'a', 'f']
