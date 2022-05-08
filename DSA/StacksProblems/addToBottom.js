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

    display(){
        let tempNode = this.head;
        if(tempNode ==null){
console.log("Stack Is Empty!")
        }else{
            while(tempNode != null){
                console.log(tempNode.data)
                tempNode =tempNode.next;
            }
        }
    }

    push(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    pushToBottom(data){
      let tempNode = this.head;
      let newNode = new Node(data)
      while(tempNode.next != null){

           tempNode = tempNode.next 
      }
      tempNode.next = newNode;
    }
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)


s.pushToBottom(40)
s.display()

