
// ===== COUNTS THE NUMBER OF TIMES AN ELEMENT OCCURED

function frequencyCount() {
  let myarray = [1, 2, 3, 2, 1, 5, 1, 3, 4, 2, 3, 2];
  let myhashMap = new Map();

  for (let key of myarray) {
    if (myhashMap.has(key)) {
      myhashMap.set(key, myhashMap.get(key) + 1);
    } else {
      myhashMap.set(key, 1);
    }
  }
  console.log(myhashMap);
}

// ==== COUNTS THE WORD FREQUENCY

function wordsCount(text) {
  let wordarray = text.toLowerCase().split(/\s+/); // regular expressions
  let mywordMap = new Map();
  for (let key of wordarray) {
    if (mywordMap.has(key)) {
      mywordMap.set(key, mywordMap.get(key) + 1);
    } else {
      mywordMap.set(key, 1);
    }
  }

  console.log(mywordMap);
}


