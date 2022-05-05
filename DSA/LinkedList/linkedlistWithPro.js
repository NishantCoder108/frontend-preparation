class Node {
  constructor(data) {
    this.data = data;
    this.nextAddress = null;
  }
}

// let node = new Node(12)
// let node1 = new Node(122)
// console.log(node)
// console.log(node1)

class Linkedlist {
  constructor(data) {
    this.root = null;
  }

  // Adding to Last
  addToLast(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let temp = this.root;
      while (temp.nextAddress != null) {
        // let temp = this.root.nextAddress;
        temp = temp.nextAddress;
      }
      temp.nextAddress = newNode;
    }
    // console.log(newNode)
  }

  // Display the data
  display() {
    let temp = this.root;
    if (temp == null) return;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.nextAddress;
    }
  }

  // Adding to Front
  addToFront(data) {
    let newNode = new Node(data);
    let temp = newNode;

    temp.nextAddress = this.root;
    this.root = temp;
  }

  // Delete method : delete all node
  delete() {
    this.root = null;
  }

  // remove last element
  removeLast() {
    let temp = this.root;

    if (temp == null) {
      return;
    }
    if (temp.nextAddress == null) {
      temp = null;
    }

    while (temp.nextAddress.nextAddress != null) {
      temp = temp.nextAddress;
    }
    if (temp.nextAddress.nextAddress == null) {
      temp.nextAddress = null;
    }
  }

  // Find ith position element
  getIthElement(pos) {
    let temp = this.root;
    if (temp == null) return;

    let i = 1;
    while (i < pos) {
      if (temp == null) return;
      temp = temp.nextAddress;
      i++;
    }

    //if pos more than from present element
    if (pos < 1) return;
    console.log(temp.data); //if data is present then show
  }

  //    Add Element to Ith Position

  addToIthPos(data, pos) {
    let temp = this.root;
    if (pos == 1) {
      return this.addToFront(data);
    }
    let newNode = new Node(data);
    let i = 1;

    while (i < pos - 1) {
      temp = temp.nextAddress;
      i++;
    }
    // pointing to new Node and newNode to temp of nextAddress
    if (temp == null) {
      return "position not pointing any referece";
    }
    if (temp != null) {
      //newAddress is pointing to temp.nextAddress i.e. next node, and temp.nextAddress is pointing to newNode .then all connected to with reference to each other
      newNode.nextAddress = temp.nextAddress;
      temp.nextAddress = newNode;
    }
  }

  //   REVERSE THE LINKEDLIST
  /*
  reverse() {
    let prev = null;
    let curr = this.root;
    let next = curr.nextAddress;

    // when next is not equal to null till while loop is working , and address to another next point.
    while (next != null) {

		curr.nextAddress = prev
      prev = curr;
      curr = next;
      next = next.nextAddress;
    }

    curr.nextAddress = prev;
    this.root = curr;
  }*/

  reverse() {
    let prev = null;
    let curr = this.root;

    while (curr != null) {
      let nextNode = curr.nextAddress;
      curr.nextAddress = prev;

      prev = curr;
      curr = nextNode;
    }

    prev.nextAddress = prev.nextAddress;
    this.root = prev;
  }

  //Reordering in way that will be folded  i.e. book
  reorderLL() {
    // const temp = this.root;
    if (
      this.root == null ||
      this.root.nextAddress == null ||
      this.root.nextAddress.nextAddress == null
    )
      return;
    const splitList = () => {
      let slow = this.root;
      let fast = this.root;

      while (fast) {
        if (fast.nextAddress && fast.nextAddress.nextAddress) {
          slow = slow.nextAddress;
          fast = fast.nextAddress.nextAddress;
        } else fast = null;
      }

      let secondHalf = slow.nextAddress;
      slow.nextAddress = null;
      return secondHalf;
    };

    const reverseList = (node) => {
      let cur = node;
      let prev = null;
      let next = null;
console.log("curr is",cur,"prev is",prev ,'next is',next)
      while (cur != null) {
        next = cur.nextAddress;
        cur.nextAddress = prev;
        prev = cur;
        cur = next;
      }
      return prev;
    };

    const mergeList = (l1, l2) => {
      let l1Next = null;
      let l2Next = null;

      while (l2 !== null) {
        l1Next = l1.nextAddress;
        l2Next = l2.nextAddress;

        l1.nextAddress = l2;
        l2.nextAddress = l1Next;

        l1 = l1Next;
        l2 = l2Next;
      }
    };

    // Main Logic
    let secodHalf = splitList();
	console.log(secodHalf)
    let reverseListData = reverseList(secodHalf);
    console.log("second Half", secodHalf);
    console.log("reverseListData", reverseListData);
    mergeList(this.root, reverseListData);
    return this.root;
  }
}
// let linklist= new Linkedlist(3)
let linklist = new Linkedlist();
// console.log(linklist);
linklist.addToFront(10);

linklist.addToLast(20);
linklist.addToLast(30);
linklist.addToLast(40);
linklist.addToLast(50);
// linklist.addToLast(60);
// linklist.addToLast(70);
// linklist.addToLast(80);
// linklist.addToLast(90);
// linklist.addToLast(100);

// console.log(linklist)

// linklist.delete()
// linklist.getIthElement(01);
// linklist.addToIthPos(108, 5);

linklist.display();
// linklist.removeLast()
// linklist.reverse();
console.log(".........");
linklist.reorderLL();
linklist.display();

/**---------------------------------------------------------------------------------- */

// function quickSort(array) {

// 	if(array.length <=1) return array;

// 	let PIVOT = array[0];

// 	let Lesser = []
// 	let Greater = []

// 	for(let i= 1; i<array.length; i++){
// 		if(array[i] >PIVOT){
// 			Greater.push(array[i])
// 		}
// 		else{
// 			Lesser.push(array[i])
// 		}

// 	}

// 	const sorted = [...quickSort(Lesser),PIVOT,...quickSort(Greater)]
//    return sorted;
// }

// console.log(quickSort([2,9,5,3,8]))

// Do not edit the line below.
// exports.quickSort = quickSort;
