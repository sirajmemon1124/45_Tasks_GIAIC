"use strict";
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the
// program.
Object.defineProperty(exports, "__esModule", { value: true });
let Arr = [`Siraj`, 24, `Student`];
console.log("Produce an index error:");
console.log(Arr[3] + '\n');
console.log("Correction in Index error:");
console.log(Arr[2]);
