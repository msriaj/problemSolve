// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function hscw(params) {
    const inputStr = params;
    const abcdarray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    Array.prototype.max = function () {
        return Math.max.apply(null, this);
    };

    let inputArr = inputStr.split(" "), inputArrValue = [];

    for (let index = 0; index < inputArr.length; index++) {
        const element = inputArr[index].split("");
        let inputsValue = 0;
        for (let i = 0; i < element.length; i++) {
            inputsValue += abcdarray.indexOf(element[i]) + 1;
        }
        inputArrValue.push(inputsValue);
    }

    const maxV = inputArrValue.max();
    return inputArr[inputArrValue.indexOf(maxV)];
}

console.log(hscw("sohel riaj"))