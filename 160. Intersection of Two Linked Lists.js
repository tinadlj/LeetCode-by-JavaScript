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
    var lenA=getLen(headA);
    var lenB=getLen(headB);
    var pA=headA;
    var pB=headB;
    
    while(lenA<lenB){
        pB=pB.next;
        lenB--;
    }
    
    while(lenA>lenB){
        pA=pA.next;
        lenA--;
    }
    
    while(pA){
        if (pA===pB){
            return pA;
        }
        pA=pA.next;
        pB=pB.next;
    }
    
    return pA;
};

function getLen(listN){
    var len=0;
    while(listN){
        len++;
        listN=listN.next;
    }
    return len;
}
