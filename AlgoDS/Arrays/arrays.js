//INSERTION,DELETION

//======PROBLEMS========

let numbers = [1, 2, 3, 4, 5, 6];

// PROBLEM 1 :- insert 100 at third position i=5
function insert(numbers) {
  let index = 3;
  for (let i = numbers.length - 1; i >= index; i--) {
    numbers[i + 1] = numbers[i];
  }
  numbers[index] = 100;
  console.log(numbers);
}

// PROBLEM 2:- Deletion from End
function deleteElement(numbers) {
  let atindex = 3; //65
  for (let i = atindex; i <= numbers.length - 1; i++) {
    numbers[i] = numbers[i + 1];
  }
  numbers.length = numbers.length - 1;
  console.log(numbers);
}

// PROBLEM 3:- FIND SUM OF ARRAY ELEMENTS

function findSum(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  console.log(sum); // 21
}

// PROBLEM 4: FIND MAX AND MIN OF ARRAY
function findMax_Min(numbers) {
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i + 1] > max) {
      max = numbers[i + 1];
    }
    if (numbers[i + 1] < min) {
      min = numbers[i + 1];
    }
  }

  console.log(max, min);
}

// PROBLEM 5:- ARRAY REVERSEL

function reverseArray(numbers) {
  let newnum = [];
  let i = 0;

  while (i <= numbers.length - 1) {
    element = numbers[numbers.length-1];
    newnum.push(element);
    i++;
  }
  console.log(newnum);
}

reverseArray(numbers);