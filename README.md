# Unexpected Type Coercion in JavaScript Addition

This repository demonstrates a common JavaScript pitfall: unexpected type coercion during addition.  When adding numbers and strings, JavaScript performs string concatenation rather than numeric addition. This can lead to subtle and difficult-to-debug errors.

The `bug.js` file contains code illustrating this issue. The `bugSolution.js` file offers a solution using type checking or explicit type conversion.

## How to reproduce the bug

1. Clone this repository.
2. Run `bug.js` using a JavaScript interpreter (e.g., Node.js).
3. Observe the unexpected outputs.

## Solution

The solution involves adding explicit type checking or conversion before performing addition to ensure that all operands are numbers.  See `bugSolution.js` for an example of this.