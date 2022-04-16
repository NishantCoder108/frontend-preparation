//STACK
class MinMaxStack {
  constructor() {
    this.minMaxStack = []; //store the min max value
    this.stack = []; //storing the value
  }

  //To See Last Element of Stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  //Removing the Last Element of Stack
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  //Adding the Element ,End of Stack
  push(number) {
    const newMinMax = { min: number, max: number };

    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }

    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }


  //Get Minimum Element 
  getMin(){
      return this.minMaxStack[this.minMaxStack.length -1].min;
  }


  //Get Maximum Element
  getMax(){
      return this.minMaxStack[this.minMaxStack.length -1].max;
  }
}


const stack = new MinMaxStack();
stack.push(3)
stack.push(8)
stack.push(89)
stack.push(6)
stack.push(62)
console.log(stack)

console.log("Removing Element is :",stack.pop())
console.log("Last Element in Stack is :",stack.peek())
console.log("Maximum Number is :",stack.getMax())
console.log("Minimum Number is :",stack.getMin())
/**
 We are creating two array , first array for min-max stack data value will be store and  second array for storing the data value of current value
 */
