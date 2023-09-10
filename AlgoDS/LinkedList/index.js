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
  insertFirst(data) {
    const newNode = new Node(data); // Create a new node and refrence will be stored in (NewNode)
    newNode.next = this.head; // Set the new node's next to the current head
    this.head = newNode; // Update the head to be the new node
    this.size++;
  }

    // insert in the End
  insertAtEnd(data) {
    const newNode = new Node(data);

    if (this.head===null) {
      this.head = newNode; // If the list is empty, set the new node as the head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Traverse the list to find the last node
      }
      current.next = newNode; // Update the last node's next reference to point to the new node
    }
    this.size++;
    }
    
    // print linkedList

    printData() {
        let current = this.head;
        while (current.next) {
            console.log(current.data);
            current = current.next;

        }

       
    }
}

let myList = new LinkedList();
myList.insertFirst(500);
myList.insertAtEnd(1000);
myList.insertAtEnd(800);
// myList.insertFirst(900);
// myList.printData();
// console.log(myList)
myList.printData();
