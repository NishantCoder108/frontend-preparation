/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(headA == null   || headB ==null)return null
    let a = headA;
    let b = headB;
    
    // it will iterating till both is equal e.g.if they are not intersect each other , they reach to null , they are eual
    while(a != b ){
        a = a==null ? headB : a.next;
        b = b==null ? headA : b.next;
    }
    return a  //if intersection point then Node be showed otherewise Null; 
};






/**---------OTHER APPROACH--------------- */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
   
    if(headA == null  || headB ==null)return;
    
    //step 1 :- Find Length of both
    
    let lenA = 0;
    let lenB = 0;
    
    let tempA = headA ;
    let tempB = headB;
    
    
    while(tempA){
        tempA = tempA.next;
        lenA++;
    }
    
    while(tempB){
        tempB = tempB.next;
        lenB++;
        
    }
    
    let diff = Math.abs(lenA - lenB);
    
    
    let tHeadA =headA;
    let tHeadB = headB;
    
    if(lenA > lenB){
        while(diff > 0){
            tHeadA = tHeadA.next;
            diff--;
        }
    }
    else{
        while(diff > 0){
            tHeadB = tHeadB.next;
            diff--;
        }
    }
    
    
    //Equality checking ;
    
    while(tHeadA != tHeadB){
       tHeadA = tHeadA.next;
        tHeadB = tHeadB.next;
        
        if(tHeadA == null   ||  tHeadB ==null)return null
    }
    
    return tHeadA;
};