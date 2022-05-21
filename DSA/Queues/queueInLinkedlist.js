class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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
  }

  removeToFirst() {
      if(this.head !== null){
            let data = this.head.data;
            this.head = this.head.next;
            return data;

      }
   
  }

  front() {
    return this.head.data;
  }
}

class Queue {
  constructor(data) {
    this.queue = new LinkedList();
  }

  enqueue(data) {
    return this.queue.addToEnd(data);
  }

  dequeue() {
    return this.queue.removeToFirst();
  }

  front() {
   console.log('Front ',this.queue.front());
  }

  display() {
    let tempNode = this.queue.head;

    console.log(tempNode)
    while (tempNode !== null) {
      console.log(tempNode.data);
      tempNode = tempNode.next;
    }
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.dequeue()
q.dequeue()

q.display();

//front
q.front()
