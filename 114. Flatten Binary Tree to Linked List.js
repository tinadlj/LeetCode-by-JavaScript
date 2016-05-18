/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 //only and always push the right side to stack, when there is no left side, pop from the stack
var flatten = function(root) {
    
    var stack=[];
    var t=root;
    
    while (t!==null || stack.length>0){
        if (t.right!==null){
            stack.push(t.right);
        }
        
        if(t.left!==null){
            t.right=t.left;
            t.left=null;
        }else if(stack.length>0){
            var tt=stack.pop();
            t.right=tt;
        }
        
        t=t.right;
    }
    
};
