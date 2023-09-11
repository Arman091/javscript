class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // head will point to first node always
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first Node or Insert at starting method;
  insertAtStart(data) {
    const newNode = new Node(data); // Create a new node and refrence will be stored in (NewNode)
    newNode.next = this.head; // Set the new node's next to the current head
    this.head = newNode; // Update the head to be the new node
    this.size++;
  }

  // insert in the End
  insertAtEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; 
      }
      current.next = newNode; 
    }
    this.size++;
  }

  // print linkedList
  printData() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);

      current = current.next;
    }
  }

  // insert at given index

  insertAtIndex(index, data) {
    if (index < 0 || index > this.size) {
      console.log("Index is out of List range");
      return;
    } else if (index === 0) {
      this.insertAtStart(data);
    } else {
      const node = new Node(data);
      let current, previous;
      current = this.head;
      let count = 0;
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this.size += 1;
    }
  }
  // get Atindex
  
  getATindex(index) {
    if (index < 0 || index > this.size) {
      console.log("Index is out of List range");
      return;
    }
    else {
      let count = 0;
      let current = this.head;
      while (count < index) {
        current = current.next;
        count++;
      }
      console.log(current.data)
    }
    
  }
  
  removeAtindex(index) {
     if (index < 0 || index > this.size) {
       console.log("Index is out of List range");
       return;
     }
     else if (index == 0) {
       let current = this.head;
       this.head = current.next;
     }
     else {
       let count = 0;
       let previous;
       let current = this.head;
       while (count < index) {
         previous = current;
         count++;
         current = current.next;
       }
       previous.next = current.next;
     }
  }
}

let myList = new LinkedList();
myList.insertAtStart(500);
myList.insertAtEnd(1000);
myList.insertAtEnd(800);
myList.insertAtStart(2);
myList.insertAtIndex(4, 100); // indexing start from 0
// myList.printData()
myList.removeAtindex(0);
myList.printData()


