/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head===null || head.next===null){
        return true;
    }
    
    var fast=head;
    var slow=head;
    
    while(fast.next && fast.next.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    
    var secondHead=slow.next;
    
    var p1=secondHead;
    var p2=secondHead.next;
    
    while(p2){
        var temp=p2.next;
        p2.next=p1;
        p1=p2;
        p2=temp;
    }
    
    secondHead.next=null;
    
    var p=p1;
    var q=head;
    while(p){
        if (p.val!==q.val){
            return false;
        }
        p=p.next;
        q=q.next;
    }

        return true;
};
