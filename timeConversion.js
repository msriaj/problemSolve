// // https://www.hackerrank.com/challenges/time-conversion/
// Given a time in -hour AM / PM format, convert it to military(24 - hour) time.

//     Note: - 12: 00: 00AM on a 12 - hour clock is 00: 00: 00 on a 24 - hour clock.
// - 12: 00: 00PM on a 12 - hour clock is 12: 00: 00 on a 24 - hour clock.
// Sample Input 0
// ------------------------
// 07: 05: 45PM
// Sample Output 0
// ------------------------
// 19: 05: 45

function timeConversion(s) {
    let arrayS = s.split(":"), firstNumber = parseInt(arrayS[0]);
    if (s.endsWith("PM")) {
        if (arrayS[0] < 12) {
            arrayS[0] = 12 + firstNumber;
        }
        else {
            arrayS[0] = 12
        }
        arrayS[arrayS.length - 1] = arrayS[arrayS.length - 1].replace(/\D/g, '');
    }
    else {
        if (firstNumber === 12) {
            arrayS[0] = "00";
        }
        arrayS[arrayS.length - 1] = arrayS[arrayS.length - 1].replace(/\D/g, '');
    }
    console.log(arrayS.join(":"));
    return arrayS.join(":")

}
timeConversion("06:40:03AM");
