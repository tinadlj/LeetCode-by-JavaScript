/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k===0) {
        return head;
    }
    
    var dummyHead=new TreeNode(-1);
    dummyHead.next=head;
    var p=head;
    var len=1;
    
    while(p.next){
        p=p.next;
        len++;
    }
    
    var remain=len-k%len;
    
    if (remain===len){
        return head;
    }
    
    p.next=head;
    
    while(remain>0){
        p=p.next;
        remain--;
    }
    
    head=p.next;
    p.next=null;
    
    return head;
    
};
