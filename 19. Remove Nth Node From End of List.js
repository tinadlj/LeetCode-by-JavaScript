/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var t1=new ListNode();
    var t2=new ListNode();
    
    t1.next=head;
    t2.next=head;
    var r=t2;
    
    
    while(n>0 && t1.next){
        t1=t1.next;
        n--;
    }
    
    if(n>0){
        return head;
    }
    
    while(t1.next){
        t1=t1.next;
        t2=t2.next;
    }
    t2.next=t2.next.next;
    
    return r.next;
};
