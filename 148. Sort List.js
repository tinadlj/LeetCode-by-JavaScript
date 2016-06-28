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
 //use merge sort https://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F
var sortList = function(head) {
    if (!head || !head.next){
        return head;
    }
    
    var mid=findMid(head);
    var headR=mid.next;
    
    mid.next=null;
    
    return merge(sortList(head),sortList(headR));
    
};
function merge(nodeL,nodeR){
    var dummyHead=new ListNode();
    var dummyNode=dummyHead;
    while(nodeL && nodeR){
        if (nodeL.val>nodeR.val){
            dummyNode.next=nodeR;
            nodeR=nodeR.next;
        }
        else {
            dummyNode.next=nodeL;
            nodeL=nodeL.next;
        }
        dummyNode=dummyNode.next;
    }
    if (nodeL){
        dummyNode.next=nodeL;
    }
    if (nodeR){
        dummyNode.next=nodeR;
    }
    return dummyHead.next;
}

function findMid(node){
    var slow=node;
    var fast=node;
    
    while(fast.next && fast.next.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    
    return slow;
}
