// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              => true
// ")(()))"          => false
// "("               => false
// "(())((()())())"  => true


function validParentheses(parens) {
    let inputArr = parens.split("");

    let leftCount = 0;
    let rightCount = 0;



    inputArr.forEach(element => {
        if (element === '(') {
            leftCount += 1;
        }
    });


    inputArr.forEach(element => {
        if (element === ')') {
            rightCount += 1;
        }
    });




    if (inputArr[0] == ")" || inputArr[inputArr.length - 1] == "(" || leftCount !== rightCount) {
        // your code here ..
        return false;
    }
    else {
        return true;
    }



}

console.log(validParentheses("(())((()())())"));