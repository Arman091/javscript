/**
 * Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 

Example 1:

Input: nums = [-1,1,2,3,1], target = 2
Output: 3
Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
- (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
- (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target 
- (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.
 */

//Brute force Approach 1

/** 
var countPairs = function (nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] < 2) {
                count++;
            }
        }
    }
    return count;
};
*/

// approach 2 ===>  O(nlogn)
// Two Pointer
// var countPairs = function (nums, target) {
    
//     nums.sort((a, b) => a - b);
//     let count = 0;
//     let left = 0;
//     let right = nums.length - 1;

  

// }

var countPairs = function (nums, target) {
  let i = 0;
  let j = 1;
  let count = 0;
  let n = nums.length - 1;
  while (i < n) {
    if (nums[i] + nums[j] < target) {
      count++;
    }
    if (j == n) {
      i++;
      j = i;
    }
    j++;
  }
  return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2));
