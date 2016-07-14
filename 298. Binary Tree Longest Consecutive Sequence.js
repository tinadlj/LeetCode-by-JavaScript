/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
    if (!root){
        return 0;
    }
    var pre=root.val;
    
    return Math.max(findConsecutive(root.left,pre,0,1),findConsecutive(root.right,pre,0,1));
};
function findConsecutive(node,pre,max,count){
    if (!node){
        return Math.max(max,count);
    }
    
    if (node.val!==pre+1){
        max=Math.max(max,count);
        count=0;
    }
        count++;
        pre=node.val;
        
    return Math.max(findConsecutive(node.left,pre,max,count),findConsecutive(node.right,pre,max,count));
}
