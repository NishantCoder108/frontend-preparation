//Practice of Queue in LinkedList

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor(data) {
    this.head = null;
    this.tail = null;
  }

  addToEnd(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;

    this.tail = newNode;
    //addtoend we are just doing , create node ,that connected with newNode ,with his tailNode;
  }

  removeToFront() {
    this.head = this.head.next;
  }

  front() {
    return this.head.data;
  }

  display() {
    let tempNode = this.head;
    while (tempNode !== null) {
      console.log(tempNode.data);

      tempNode = tempNode.next;
    }
  }
}

let q = new Linkedlist();
//Adding to Last or Push to last or First In
q.addToEnd(10);
q.addToEnd(20);
q.addToEnd(30);
q.addToEnd(30);
q.addToEnd(30);
q.addToEnd(80);
q.addToEnd(90);


//Removing from first
q.removeToFront()
console.log(q);
q.display();

//Who is FRONT in line
console.log("Front",q.front())
