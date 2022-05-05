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

  reorderList() {
    if (
      this.root == null ||
      this.root.nextAddress == null ||
      this.root.nextAddress.nextAddress == null
    )
      return;

    const midLL = () => {
      let fast = this.root;
      let slow = this.root;

      while (fast) {
        if (fast.nextAddress && fast.nextAddress.nextAddress) {
          slow = slow.nextAddress;
          fast = fast.nextAddress.nextAddress;
        } else {
          fast = null;
        }
      }

      let secondHalf = slow.nextAddress;
      slow.nextAddress = null;
      return secondHalf;
    };

    const reverseLL = (node) => {
      let prevNode = null;
      let currNode = node;
      let nextNode = currNode.nextAddress;

      while (nextNode != null) {
        currNode.nextAddress = prevNode;

        prevNode = currNode;
        currNode = nextNode;
        nextNode = nextNode.nextAddress;
      }

      currNode.nextAddress = prevNode;
      return currNode;
    };

    const mergeLL = (originalL1, reverseL2) => {
      let originalL1Next = null;
      let reverseL2Next = null;

      while (reverseL2 != null) {
        originalL1Next = originalL1.nextAddress;
        reverseL2Next = reverseL2.nextAddress;

        originalL1.nextAddress = reverseL2;
        reverseL2.nextAddress = originalL1Next;

        originalL1 = originalL1Next;
        reverseL2 = reverseL2Next;
      }
    };

    let midLLL = midLL();
    let reverseLLL = reverseLL(midLLL);
    mergeLL(this.root, reverseLLL);

    return this.root;
  }
}

let linkLL = new Linkedlist();

linkLL.addToLast(1)
linkLL.addToLast(2)
linkLL.addToLast(3)
linkLL.addToLast(4)
linkLL.addToLast(5)
linkLL.addToLast(6)
linkLL.reorderList()
linkLL.display();
// console.log(linkLL);
