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
var reverseList = function(head) {
    if (!head || !head.next){
        return head;
    }
    var cur=head.next,pre=head;
    
    while(cur){
        var t=cur.next;
        
        cur.next=pre;
        pre=cur;
        cur=t;
    }
    head.next=null;
    
    return pre;
};
