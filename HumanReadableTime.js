// Write a function, which takes a non - negative integer(seconds) as input and returns the time in a human - readable format(HH: MM: SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999(99: 59: 59)

// You can find some examples in the test fixtures.


function humanReadable(seconds) {
    if (seconds === 0) return '00:00:00';


    let timeArr = "";

    if (seconds <= 59) {
        timeArr = "00:00:" + seconds;
    }
    if (seconds <= 3599) {
        let sec = seconds % 60;
        let min = (seconds - sec) / 60;

        if (min <= 9) min = "0" + min;
        if (sec <= 9) sec = "0" + sec;

        timeArr = "00:" + min + ":" + sec;
    }
    else {
        let hour = (seconds - (seconds % 3600)) / 3600;
        let sec = (seconds - (hour * 3600)) % 60;
        let min = (seconds - (hour * 3600) - sec) / 60;

        if (min <= 9) min = "0" + min;
        if (sec <= 9) sec = "0" + sec;
        if (hour <= 9) hour = "0" + hour;

        timeArr = hour + ":" + min + ":" + sec;
    }

    return timeArr;
}


console.log(humanReadable(3600))