// https://www.hackerrank.com/challenges/birthday-cake-candles/ 

// You are in charge of the cake for a child's birthday. You have decided the cake will have one
// candle for each year of their total age. They will only be able to blow out the tallest of the
// candles. Count how many candles are tallest.
// ---------------------
// Sample Input 
// 4
// 3 2 1 3

// Sample Output 
//----------------------
// 2

function birthdayCakeCandles(candles) {
    let tallestCandlesCounter = 0;
    for (let i = 0; i < candles.length; i++) {
        if (Math.max(...candles) === candles[i]) {
            tallestCandlesCounter++;
        }
    }
    return tallestCandlesCounter;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))