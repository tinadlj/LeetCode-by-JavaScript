/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
   if (lists===null ){
       return null;
   }
   
   if (lists.length<=1){
       return lists[0]||[];
   }
   
   while (lists.length!==1){
       var begin=0;
       var end=lists.length-1;
       
       while(begin<end){
           lists[begin]=merge2SortedLists(lists[begin],lists[end]);
           begin++;
           end--;
       }
       
       lists.splice(end+1);
   }
   
   return lists[0];
};
function merge2SortedLists(list1,list2){
   if (list1===null || list2===null || list1.length===0 || list2.length===0){
       return list2 || list1;
   }
   
   var t1=list1;
   var t2=list2;
   
   var p=new ListNode(-1);
   var r=p;
   
   while (t1!==null && t2 !==null){
       if (t1.val>t2.val){
           p.next=t2;
           t2=t2.next;
       }else{
           p.next=t1;
           t1=t1.next;
       }
       p=p.next;
   }
   
   if(t1===null){
       p.next=t2;
   }else{
       p.next=t1;
   }
   
   return r.next;
}
