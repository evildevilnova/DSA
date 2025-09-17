function memoize(fn) {
  let cache = {}; // store previous results

  return function (n) {
    if (cache[n] !== undefined) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result for:", n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

// Expensive function (e.g., factorial)
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Memoized factorial
let memoFactorial = memoize(factorial);

console.log(memoFactorial(5)); // Calculating result
console.log(memoFactorial(5)); // Fetching from cache
console.log(memoFactorial(6)); // Uses cache for factorial(5)
