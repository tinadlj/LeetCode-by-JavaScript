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
    
    if (!head ||!head.next)
        return head;
        
    var t=head; // get temp node which needs to be pointed to
    var a=head.next; // a is current node
    var b=a.next; // b is next node which lose connection with the previous nodes
    head.next=null;
    
    do {
        a.next=t; // first step, change current node to point to previous node
        t=a; //second, move previous node one forward
        a=b; //third, move current node one forward
        if (b!==null)
        {
            //a=b;
            b=b.next; //last, if there is more node, keep the futurn node connection.
        }
    }while(a!==null); // if current node is null, stop
    return t; // finally t is the last iteration's current node
    
    
};
