# Implicit Type Coercion Bug in TypeScript

This example demonstrates a common issue in TypeScript where implicit type coercion can lead to runtime errors that are not caught during compilation.

The `printNumber` function is defined to accept a number. However, a string is passed to the function, resulting in unexpected behavior at runtime.

## How to reproduce
1. Save the code in `bug.ts`
2. Compile and run the code using the TypeScript compiler.
3. Observe the unexpected behavior at runtime.

## Solution
The solution involves using type guards or stricter type checking to prevent this issue.