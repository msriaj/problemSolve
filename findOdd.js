// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//     Examples
// [7] should return 7, because it occurs 1 time(which is odd).
// [0] should return 0, because it occurs 1 time(which is odd).
// [1, 1, 2] should return 2, because it occurs 1 time(which is odd).
// [0, 1, 0, 1, 0] should return 0, because it occurs 3 times(which is odd).
// [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it appears 1 time(which is odd).






let inputarray = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];

function findOdd(A) {
    let oddOutput = [];

    for (let index = 0; index < A.length; index++) {

        let target = A[index];


        let counter = 0;

        for (singelArray of A) {
            if (singelArray == target) {
                counter++;
            }
        };

        if (counter % 2 > 0) {
            if (oddOutput.indexOf(A[index]) < 0) {
                oddOutput.push(A[index]);
            }
        }

    }
    return oddOutput[0];

}
console.log(findOdd(inputarray))