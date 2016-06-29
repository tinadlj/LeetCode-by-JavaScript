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
    if (!head || !head.next){
        return null;
    }
    
    var slow=head;
    var fast=head;
    
    while(fast.next && fast.next.next ){
        fast=fast.next.next;
        slow=slow.next;
        if (fast ===slow){
            fast=head;
            while(fast!=slow){
                fast=fast.next;
                slow=slow.next;
            }
            return slow;
            
        }
    }
    
    return null;
};
