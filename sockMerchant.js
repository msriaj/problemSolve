// // There is a large pile of socks that must be paired by color.
// // Given an array of integers representing the color of each sock,
// // determine how many pairs of socks with matching colors there are.
// Sample Input

// STDIN                       Function
// ----- --------
//     9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3

function sockMerchant(n, ar) {
    let result = 0;
    let alreadyCheckd = []
    for (let i = 0; i < n; i++) {
        if (alreadyCheckd.includes(ar[i]) !== true) {

            let temp = 0;
            for (let j = 0; j < n; j++) {

                if (ar[i] === ar[j]) {
                    temp++;

                }

            }

            if (temp > 1) {
                result += ((temp - (temp % 2)) / 2)
            }

        }
        alreadyCheckd.push(ar[i]);
    }
    return result
}
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));