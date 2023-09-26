var numIdenticalPairs = function (nums) {
    let hashmap = new Map();
    let totalCount=0;
  for (let element of nums) {
    if (hashmap.has(element)) {
      hashmap.set(element, hashmap.get(element) + 1);
    } else {
      hashmap.set(element, 1);
    }
  }

  // Now calculate the number of pairs using nC2 for each element in the Map
  for (let [element, count] of hashmap.entries()) {
    if (count >= 2) {
      // Calculate the number of pairs using nC2
        let pairs = (count * (count - 1)) / 2;
         totalCount += pairs;
     
    }
    }
    
    return totalCount
};


console.log(numIdenticalPairs([1, 1, 1, 1]));