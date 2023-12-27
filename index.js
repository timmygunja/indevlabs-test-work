// Write a function that finds missing number in array:
// Given array of sequent numbers 0,1,2,3...N with missing member
// Function finds a first missing number occurrence in the sequence.

// Example:
// Input: [5,0,1,3,2]
// Output: 4
// Input:  [7, 9,10, 11, 12]
// Output: 8

// Implement the function + tests and explain your thinking and assumptions as comments.

// Test inputs
// const input = {1:2, 3:4};
// const input = [5];
// const input = [5, 0, true, 3, 2];
const input = [5, 0, 1, 3, 2];
// const input = [7, 9, 10, 11, 12];
// const input = [1, 3];
// const input = [5, 0, 1, 1, 3, 2];
// const input = [5, 0, -1, -2, -4, 1, 3, 2];
// const input = [1, 2, 3, 4, 5];

const findMissing = (array) => {
  let missingValue;

  // Check if input is an Array
  if (!(array instanceof Array)) {
    return Error("Input object type should be Array");
  }

  // Check if input length is more than 1
  if (array.length < 2) {
    return Error("Input length is too short");
  }

  // Sort array to compare neighbours
  const sortedArray = array.sort((a, b) => a - b);

  // Iterate over sorted array starting from the second value
  for (let i = 1; i < sortedArray.length; i++) {
    // Check if Array value is of type Number
    if (!(typeof sortedArray[i] == "number")) {
      return Error("Input contains value with the wrong type (Not a Number)");
    }

    // Compare the neighbours
    if (Math.abs(sortedArray[i - 1] - sortedArray[i]) > 1) {
      missingValue = sortedArray[i - 1] + 1;
      return missingValue;
    }
  }

  return Error("No missing member found in between");
};

const answer = findMissing(input);

console.log(answer);
