/**
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 */

var numberlessthancurr = function (nums) { 
   let hash = new Map();
   let sorted = nums.slice().sort((a, b) => a - b);
   sorted.forEach((number, idx) =>
     hash.has(number) ? null : hash.set(number, idx)
    );
   return nums.map((x) => hash.get(x));
   
};


console.log(runningSum([8, 1, 2, 2, 3]));