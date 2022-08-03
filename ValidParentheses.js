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