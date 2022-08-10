// Sample Input

// STDIN           Function
// ----- --------
//     6               arr[] sz n = 6
//         - 4 3 - 9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667

function plusMinus(arr) {
    let neg = 0, pos = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        (arr[i] < 0) ? neg++ : (arr[i] > 0) ? pos++ : zero++
    }
    console.log((pos / arr.length).toFixed(6));
    console.log((neg / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}
plusMinus([1, 2, 3, -1, -2, -3, 0, 0])

