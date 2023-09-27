/**
Input: num = "52"
Output: "5"   //largest odd string
 */

var oddString = function (nums) {
  if (+nums % 2 !== 0) {
    return nums;
  }
  else {
    let number = nums.split("");
    let greatest = 0;
    for (let i = 0; i < nums.length-1; i++) {
      if (+number[i] > greatest && +number[i] % 2 !== 0) {
        greatest = number[i];
      }
    }
    return greatest;
  }

};

console.log(`the greates oddNumber in given String is ${oddString("458")}`);
