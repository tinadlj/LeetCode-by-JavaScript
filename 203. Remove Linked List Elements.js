/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head ===null){
        return head;
    }
    
    var dummy=new ListNode(val+1); //create a dummy node before the head, so the current one will start from the beginning
    dummy.next=head;
    var pre=dummy;
    var cur=dummy.next;
    while(cur){
        if(cur.val===val){
            cur=cur.next;
            pre.next=cur;
        }else{
            pre=cur;
            cur=cur.next;
        }
    }
    
    return dummy.next;
};
