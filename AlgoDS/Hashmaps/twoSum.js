let pairs = [];
var twoSum = function (nums, target) {
  let numsmap = new Map();
  for (let i in nums) {
    let complement = target - nums[i];
    if (numsmap.has(complement)) {
      
      pairs.push([nums[i],complement])
      // [i, numsmap.get(complement)];
    }
    numsmap.set(nums[i], i);
  }
  return pairs
};


console.log(twoSum([12, 3, 4, 5, 6, 9], 15));