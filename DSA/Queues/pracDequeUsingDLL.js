//Deque , In this DSA , Insertion and Deletion from both sides.
//We use Double Linked list
//DEQUE :- Double Ended Queue

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor(data) {
    this.head = null;
    this.tail = null;
  }

  //Adding to Front
  addToFront(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  //Removing from Front
  removeToFront() {
    if (this.head === null) return;

    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null; //when head next is null then return
    }
  }

  //Adding to Last
  addToLast(data) {
    let newNode = new Node(data);
    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  //Removing from Last
  removeToLast() {
    if (this.tail === null) return;

    this.tail = this.tail.prev;
    // console.log("this.tail is", this.tail)
    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    } //when tail is null,it next will error so , i just return
  }

  display() {
    let headNode = this.head;
    let tailNode = this.tail;
    while (headNode !== null) {
      console.log(headNode.data, tailNode?.data);
      headNode = headNode.next;
    }
  }
}

let d = new Deque();

//addding from front
d.addToFront(20);
d.addToFront(10);

//adding from last
d.addToLast(30);
d.addToLast(40);
// d.addToLast(50);
// d.addToLast(60);
// d.addToLast(70);
// d.addToLast(80);

//removing from front
d.removeToFront();
d.removeToFront();
// d.removeToFront();
// d.removeToFront();



//Removing from Last
d.removeToLast();

console.log(d);

// d.removeToLast();
d.removeToLast();

console.log(d);

//Showing all data
d.display();
