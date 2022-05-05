//How to find starting Node ,where loop is started;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {

    if(head == null  || head.next == null)return null;
    
    let slow = head;
    let fast = head;
    let entries = head;
    
    while((fast.next != null)  &&  (fast.next.next != null)){
        slow = slow.next;
        fast = fast.next.next;
        
        if(fast == slow ){
           
            while(slow != entries){
                slow = slow.next;
                entries = entries.next;
            }
            return entries
        }
    }
    
    return null;
};

// Other Method
var startNode =(head)=>{

    if(head ==null || head.next == null) return null;

    let fast = head;
    let slow =head;

    while(fast.next != null  && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;

        if(fast == slow) break;
    }

    if(fast.next != null  && fast.next.next) return null;

    slow =head;

    while(fast != slow){
        slow = slow.next;
        fast = fast.next
    }
    return slow
}