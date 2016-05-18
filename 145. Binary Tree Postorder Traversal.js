/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 //opposite order of preorder
var postorderTraversal = function(root) {
    var result=[];
    
    if (root!==null){
        traverseTree(root,result);
    }
    
    return result;
};
function traverseTree(node,r){
    if (node.val!==null){
        r.unshift(node.val);
    }
    
    if(node.right!==null){
        traverseTree(node.right,r);
    }
    
     if(node.left!==null){
        traverseTree(node.left,r);
    }
    
     if(node.right===null && node.left===null){
        return r;
    }
}
