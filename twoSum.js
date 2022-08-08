// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//     Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//     Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]







// var twoSum = function (nums, tg) {

//     for (let i = 0; i < nums.length; i++) {
//         let temp = []

//         for (let index = 0; index < nums.length; index++) {



//             if (nums[i] + nums[index] == tg) {
//                 temp.push(i);
//                 temp.push(index);
//             }

//         }
//         console.log(temp);
//     }
// }







const numbers = [3, 2], target = 5;

var twoSum = function (nums, tg) {
    let Output;

    for (let index = 0; index < nums.length; index++) {

        for (let i = index + 1; i < nums.length; i++) {

            if (nums[index] + nums[i] == tg) {

                Output = [nums.indexOf(nums[index]), nums.indexOf(nums[i])]
            }
        }


    }

    return Output
};


console.log(twoSum(numbers, target));