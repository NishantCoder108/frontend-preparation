class Node {
  constructor(data) {
    this.data = data;
    this.nextAddress = null;
  }
}

// let node = new Node(10);
// console.log(node);

class Linkedlist {
  //   root = null;  or
  constructor() {
    this.root = null;
  }

  // how to add element in linkedlist
  addToLast(data) {
    let newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
    }

    //    move temp to last until nextAddress is null
    else {
      let temp = this.root;
      while (temp.nextAddress != null) {
        temp = temp.nextAddress;
      }

      temp.nextAddress = newNode;
    }
  }


  display(){
      let temp = this.root;
      while(temp != null){
          console.log(temp.data + "-->",  )
          temp = temp.nextAddress;
      }
  }

  addToFront(data){
      let newNode = new Node(data)
      newNode.nextAddress = this.root;

      this.root = newNode
  }


  removeLast(){
    let temp = this.root;
    if(this.root ==null){
      return;
    }else if(this.root.nextAddress == null){
      
    }
    while(temp.next.next != null){
      temp = temp.nextAddress;

    }
    // temp is second last element

    temp.nextAddress =null
  }

  getIthElement(i){
    let temp = this.root;
    for(let index=0; index<i; index++){
      if(temp ==null ) return
      temp = temp.nextAddress;
    }
    if(temp !=null) {
      console.log(temp.data);
    }
    
  }

  addToIthIndex(i,data){

    if(i ===0){

    }
    let newNode = new Node(data);
    let temp = this.root;
    for(let index = 0; index < i-1;index++){
      temp = temp.nextAddress;
    }
    newNode.nextAddress = temp.nextAddress;
    temp.nextAddress = newNode;
  }

  reverse(){
    // prev ,curr,next
    let prev = null;
    let curr = this.root;
    let next  = curr.nextAddress;

    while(next != null){
      curr.nextAddress = prev;
      // change prev,curr,next

      prev= curr;
      curr =next;
      next = next.nextAddress;

    }

    curr.nextAddress = prev;
    this.root = curr;
  }
}

let linkedlist = new Linkedlist();
linkedlist.addToLast(10);
linkedlist.addToLast(20);
linkedlist.addToLast(30);
// linkedlist.addToLast(40);
// linkedlist.addToLast(50);
// linkedlist.addToLast(60);
// linkedlist.getIthElement(12)
// linkedlist.addToFront(54)

linkedlist.addToIthIndex(2,35)
linkedlist.display()
console.log("...............")
linkedlist.reverse()
linkedlist.display()