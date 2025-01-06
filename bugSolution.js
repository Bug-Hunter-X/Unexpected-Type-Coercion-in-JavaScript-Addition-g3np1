function foo(a, b) {
  // Type checking and conversion
  a = Number(a); 
  b = Number(b);

  //Check for NaN before adding
  if(isNaN(a) || isNaN(b)){
    return NaN;
  }
  return a + b;
}

console.log(foo(5, '5')); // Output: 10
console.log(foo('5', 5)); // Output: 10
console.log(foo(5, NaN)); //Output: NaN
console.log(foo(NaN, 5)); //Output: NaN
console.log(foo(undefined, 5)); //Output: NaN
console.log(foo(5, undefined)); //Output: NaN
console.log(foo(null, 5)); //Output: NaN
console.log(foo(5, null)); //Output: NaN