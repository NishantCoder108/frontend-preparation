class Stack{
    constructor(){
        this.arr = []
    }
    push(value){
        this.arr.push(value)
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is Empty")
        }
        else 
             return this.arr.pop();
    }


    isEmpty(){
        return this.arr.length == 0;
    }

    top(){
        if(this.isEmpty()){
            throw new Error("Stack is Empty")
        }

        return this.arr[this.arr.length - 1]
    }
}

let s = new Stack();
s.push(10)
s.push(20)
s.push(30)
s.push(40)

console.log(s)

s.pop()
s.pop()
s.pop()
s.pop()

// console.log(s.pop())
console.log(s.isEmpty())
