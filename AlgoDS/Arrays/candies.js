/**
 *Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

 */

/**
 *  find greatest number first
 *  each kids ko candy do extra aur add karke greatest number ke sath comapre karlo
 *
 */



let kidsWithCandies = function (candies, extraCandies) {
  // Find the greatest number in the array
  let greatest = 0;

  for (let index = 0; index < candies.length; index++) {
    if (candies[index] > greatest) {
      greatest = candies[index];
    }
  }
  // Check if each kid can have the greatest number of candies
  for (let index = 0; index < candies.length; index++) {
    candies[index] = candies[index] + extraCandies >= greatest;
  }

  return candies;
};

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
