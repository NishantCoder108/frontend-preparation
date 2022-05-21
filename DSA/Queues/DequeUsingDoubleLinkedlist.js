/*DEQUE means , from both side , we can insert or delete, it is another type of DS */
class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(data){
        this.head = null;
        this.tail = null;
    }

    addToFront(data){
      
       let newNode = new Node(data);

       if(this.head === null){
           this.head = newNode;
           this.tail = newNode;
           return;
       }
       newNode.next = this.head;
       this.head.prev = newNode;
       this.head = newNode; 
    }

    removeToFront(){
        if(this.head == null){
            console.log("Empty Linkedlist")
            return
        }
        
        let data = this.head.data;
        this.head = this.head.next;
     
        if(this.head === null){
            this.tail = null;
        }else{
            this.head.prev =null;
        }

        return data;
        
    }

    addToEnd(data){

        let newNode = new Node(data)
       if(this.tail === null){
           this.head = newNode;
           this.tail = newNode;
           return;
           }

           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail =newNode;
        }

    removeToLast(){//hw

    }
}


let ddl = new DoublyLinkedList();
ddl.addToEnd(10)
ddl.addToEnd(20)
ddl.addToEnd(30)
ddl.addToFront(9)
ddl.addToFront(8)
ddl.addToFront(7)


console.log(ddl.removeToFront())
console.log(ddl.removeToFront())
console.log(ddl.removeToFront())
console.log(ddl.removeToFront())
console.log(ddl.removeToFront())
