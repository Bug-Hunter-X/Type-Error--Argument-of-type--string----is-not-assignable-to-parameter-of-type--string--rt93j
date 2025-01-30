# Type Error in TypeScript

This repository demonstrates a common type error in TypeScript where an array is passed to a function expecting a string. The error is caught during compilation, preventing runtime issues.

## Bug

The `greeter` function expects a single string argument. However, the code attempts to pass an array of strings.

## Solution

The solution involves either modifying the `greeter` function to accept an array or modifying the function call to pass a single string.