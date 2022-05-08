/*
1.pop
2.push
3.peek
4.max
5.min
6. */

class Node {
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
        newNode.next= this.head;
        this.head = newNode;
    }
    display(){
        let tempNode = this.head;

        if(tempNode == null){
            console.log("Stack Is Empty!")
        }
        else{
            while(tempNode != null){
            console.log(tempNode.data)
            tempNode= tempNode.next
        } 
        }
       
    }

    reverse(){
        let prevNode = null;
        let currNode = this.head;

        let nextNode = currNode.next;
        while(nextNode != null){
            currNode.next = prevNode;

            prevNode = currNode;
            currNode = nextNode;
            nextNode = nextNode.next;
        }
        currNode.next = prevNode;
        this.head = currNode;

    }

}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)

// console.log(s)
s.display()
console.log("_____________")
s.reverse()
s.display()   
