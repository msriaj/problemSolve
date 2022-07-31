//  job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number.the number 1 should be appended to the new string.
//     Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.



function incrementString(strng) {

    let inputArray = strng.split("");
    let inputNumbr = []

    // find number from string and store 

    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] >= 0) {
            inputNumbr.push(inputArray[index]);
            inputArray[index] = "";
        }
    }

    // found number polishing 
    inputNumbr = inputNumbr.join("");
    const inputNumbr2 = parseInt(inputNumbr);


    // +1 on found number 
    let plusOne = 1;
    if (inputNumbr2 >= 0) {
        plusOne = (inputNumbr2 + 1);

    }

    let len = inputNumbr.length - plusOne.toString().length;
    let newNumber = plusOne.toString();

    for (i = 0; i < len; i++) {

        newNumber = "0" + newNumber;
    }

    // push number into main string array and join 
    inputArray.push(newNumber);
    inputArray = inputArray.join("")

    return inputArray
}