
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//     Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let positive = [];
    let negetive = [];
    let outPut = [];

    for (let index = 0; index < input.length; index++) {

        if (input[index] >= 1) {
            positive.push(input[index]);
        }
        else {
            negetive.push(input[index]);
        }
    }

    outPut.push(positive.length);

    let totalneg = 0;
    for (let index = 0; index < negetive.length; index++) {
        totalneg += negetive[index];

    }
    outPut.push(totalneg);

    return outPut
}
console.log(countPositivesSumNegatives[0, 0])