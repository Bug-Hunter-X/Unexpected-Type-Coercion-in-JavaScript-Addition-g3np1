function foo(a, b) {
  return a + b;
}

console.log(foo(5, '5')); // Output: 55
console.log(foo('5', 5)); // Output: 55
console.log(foo(5, NaN)); //Output: NaN
console.log(foo(NaN, 5)); //Output: NaN
console.log(foo(undefined, 5)); //Output: undefined5
console.log(foo(5, undefined)); //Output: 5undefined
console.log(foo(null, 5)); //Output: null5
console.log(foo(5, null)); //Output: 5null