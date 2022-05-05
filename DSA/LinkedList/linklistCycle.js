class Node {
    constructor(data) {
      this.data = data;
      this.nextAddress = null;
    }
  }
  
  class Linkedlist {
    constructor(data) {
      this.root = null;
    }
  
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
  
    display() {
      let temp = this.root;
      while(temp != null){
          console.log(temp.data + "-->",  )
          temp = temp.nextAddress;
      }
    }

    linkListCycle(){
        let slow = this.root;
        let fast = this.root;

        while((fast != null) && (fast.nextAddress != null)){
            slow =slow.nextAddress;
            fast = fast.nextAddress.nextAddress;

            if(slow == fast ) return true
        }
       console.log(false)
       return false 
    }
  
  }
  
  let linkLL = new Linkedlist();
  
  linkLL.addToLast(1)
  linkLL.addToLast(2)
  linkLL.addToLast(3)
  linkLL.addToLast(4)
  linkLL.addToLast(2)
 linkLL.linkListCycle()
  linkLL.display();
  // console.log(linkLL);
  