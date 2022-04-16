//STACK

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
      let removed = this.storage[this.size]; //store the remove item
      
      delete this.storage[this.size];
      this.size--;
      
      return removed; 
  }

  peek() {
      return this.storage[this.size];
  }
}

//Test our Stack
const stack = new Stack();
stack.push("Dog");
stack.push("Cat")
stack.push("Bat")
stack.push("Rat")
console.log(stack);


stack.pop(); //it removing the last item
console.log(stack)

console.log('Removing item is :',stack.pop());//see removing item


console.log('Last Item is :', stack.peek()); //See the last item

/**
 * storage is store key value pairs , size will be key and value will value e.g.
 * {0 : "Cat", 1 : "Bear" }
 */

/*
//Stack  e.g.Last In First Out 

const stack = [];

// push  Adding the item in last
stack.push("dog");
stack.push("Cat");
stack.push("Bear");


//pop   Removing the last item
stack.pop()

console.log(stack)



//peek   to see last item in stack
stack[stack.length-1]

*/
