// 1. Boolean > Number
console.log(Number(true), typeof Number(true));   // 1 number
console.log(Number(false), typeof Number(false)); // 0 number

// 2. null > Number
console.log(Number(null), typeof Number(null)); // 0 number

// 3. undefined > Number
console.log(Number(undefined), typeof Number(undefined)); // NaN number