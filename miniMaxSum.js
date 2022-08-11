// https://www.hackerrank.com/challenges/mini-max-sum/problem?
// Output Format

// Print two space - separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

function miniMaxSum(arr) {

    let highS = 0, minS = 0;


    for (let i = 0; i < arr.length; i++) {
        if (Math.max(...arr) === arr[i]) {
            continue;
        } else {
            minS += arr[i]
        }
    }
    for (let j = 0; j < arr.length; j++) {

        if (Math.min(...arr) === arr[j]) {
            continue;
        }
        else {
            highS += arr[j];
        }

    }
    console.log(minS, highS);
}
miniMaxSum([1, 2, 3, 4, 5])