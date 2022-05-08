class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }

}


class Stack{
    constructor(data){
        this.head = null;
    }

    push(data){
        let newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode;
    }


    pop(){

        if(this.head == null){
        //   console.log('Stack is Empty')
        return
        }
      
        else{
           let tempNode = this.head;
      
        this.head = tempNode.next; 
        }
        
    }

    peek(){
       let p = this.head.data;
       console.log(p)
    }
  
    display(){
        let tempNode = this.head
         if(this.head == null){
             console.log("Stack Is Empty")
         }
        while(tempNode != null){
            console.log(tempNode.data)
            tempNode=tempNode.next
        }
    }
  
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
console.log("---------")
s.pop()





// s.peek()
s.display()