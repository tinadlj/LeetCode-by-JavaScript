/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var flag=0;
    var r=new ListNode(0);
    var t=r;
    while (l1!=null ||l2!=null){
        var v1,v2;
        if(l1!==null)
            v1=l1.val;
        else
            v1=0;
            
        if(l2!=null)
            v2=l2.val;
        else
            v2=0;
        
        var tt=new ListNode();
        tt.val=(v1+v2+flag)%10;
        t.next=tt;
        t=t.next;
        
        flag=Math.floor((v1+v2+flag)/10);
        
        if (l1!=null)
            l1=l1.next;
        if (l2!=null)
            l2=l2.next;
    }
    if (flag==1)
        t.next=new ListNode(1);
    
    return r.next;
};
