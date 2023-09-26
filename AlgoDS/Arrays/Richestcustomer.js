/**
 * Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
 */

var maximumWealth = function (accounts) {
    let greatest = 0;
    for (let account of accounts) {
        //find summ of account and replace it with value
      let sum=account.reduce((accumelator,currentvalue) => {
              return accumelator+=currentvalue
        },0)
        if (sum > greatest) {
            greatest = sum;
      } 
    }

    console.log(greatest);
};

maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
