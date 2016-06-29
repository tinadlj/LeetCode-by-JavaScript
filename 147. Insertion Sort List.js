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
var insertionSortList = function(head) {
    if (!head ||!head.next){
        return head;
    }
    var dummyNode=new ListNode();
        dummyNode.next=new ListNode(head.val);
    head=head.next;
    
    while(head){
        var dummyN=new ListNode(head.val);
        var t=dummyNode;
        
            while(t.next){
                if (t.next.val<dummyN.val){
                    t=t.next;
                }else{
                    break;
                }
                    
            }
            
       var tt=t.next;
       t.next=dummyN;
       dummyN.next=tt;
        
        head=head.next;
    }
    
    return dummyNode.next;
    
};
