/**
 * nums = [1, 2, 3, 4, 4, 3, 2, 1], n = 3
 * output:[
  1, 4, 2, 3,
  3, 2, 4, 1
]
 */
var shuffle = function (nums, n) {
    let nums2 = nums.splice(n, 2 * n - 1);
    let index = 0;
    let temparray=[]
    while (index < 2 * n ) {
        if (index % 2 === 0) {
            temparray[index] = nums.shift();
            index++;
        }
        else {
            temparray[index] = nums2.shift();
            index++
        }
    }
    return temparray;
};



console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));