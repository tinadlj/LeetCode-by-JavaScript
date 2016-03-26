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
var oddEvenList = function(head) {
    if (head===null|| head.next===null||head.next.next===null)
        return head;
    var h=head;  //pointer 1
    var tail=head.next; //pointer for the even list
    var t=tail; //pointer 2
    var tt=t.next //pointer 3
    while(tt!==null){
        h.next=tt;
        t.next=tt.next;
        h.next.next=tail;
        h=h.next;
        t=t.next;
        if (t===null)
            tt=null;
        else
            tt=t.next;
    }
    
    return head;
    
};
