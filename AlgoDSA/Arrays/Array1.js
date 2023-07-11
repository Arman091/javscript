// in this file we will be using classes to implement an array from scratch;

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
}

const newArray = new MyArray();
newArray.push("hii");
newArray.push(1000);
console.log(newArray);
