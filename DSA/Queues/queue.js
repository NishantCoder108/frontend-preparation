//QUEUE       First In First Out
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
      let removed = this.storage[this.head];
      delete this.storage[this.head]
      this.head++;
      return removed;
  }
}


const queue  = new Queue();
//Adding the element in the end of Queue
queue.enqueue("Seahorse")
queue.enqueue("Dolphin")
queue.enqueue("Whale Shark")

console.log(queue)


//Removing the element from the begin of Queue
queue.dequeue();
queue.dequeue();
console.log(queue)


console.log("Removing Element from the begin :",queue.dequeue())
queue.dequeue();
queue.dequeue();
console.log(queue)

/*
//QUEUE  First In First Out

const queue = [];


//enqueue  Adding element End of Array
queue.push("seahorse")
queue.push("dolphin")
queue.push("whale shark")

console.log(queue)


//dequeue   Removing element from beginning from Array
queue.shift()
console.log('Removed Beginning Element: ',queue.shift())
console.log(queue)
*/



//Stack and  Queue are Linear DataStructure