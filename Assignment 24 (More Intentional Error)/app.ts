// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
//  write more tests. Have at least one True and one False result for each of the following:

let str1 = 'Siraj';
let str2 = 'Memon';
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("\n Tests for equality and inequality");
console.log(str1 === 'Siraj');
console.log(str1 === str2);

// Tests using the lower case function:
console.log("\n Tests using the lower case function");
console.log(str1.toLowerCase() === 'Siraj');
console.log(str2.toLowerCase() !== 'Memon');

// Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to,
// and less than or equal to:
console.log("\n Numerical Test");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);

// Tests using "and" and "or" operators:
console.log("\n Tests using 'and' and 'or' operators:");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) && (num2 > 10));

// Test whether an item is in a array:
console.log("\n Test whether an item is in a array:");
console.log(Arr.includes(3));
console.log(Arr.includes(6));

// Test whether an item is not in a array:
console.log("\n Test whether an item is not in a array:");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));