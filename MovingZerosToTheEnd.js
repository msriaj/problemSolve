//  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//  moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
//  returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let tempArr = [];
    let tempArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            tempArr.push(arr[i])
        }
        else {
            tempArr2.push(arr[i])
        }
    }
    return tempArr2.concat(tempArr);
}


const result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(result);

