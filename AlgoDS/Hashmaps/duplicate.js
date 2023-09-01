var removeDuplicates = function (nums) {
  /* Brute Force
      for(let i=0;i<=nums.length-1;i++){
        for(let j=i+1;j<=nums.length-1;j++){
            if(nums[i]===nums[j]){
               nums.splice(j,1)
            }
            if(nums[i]===nums[i+1]){
                i=i-1;
            }
        }
      }
    

    return nums.length
*/
  let count = 0;
  for (let i = 0  ; i <= nums.length - 1;i++) {
    if (nums[i]===nums[i+1]) {
      continue;
    }
    else {
      nums[count] = nums[i];
      count++;
    }
  }
  nums.length = count;
  return nums.length;
};


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));