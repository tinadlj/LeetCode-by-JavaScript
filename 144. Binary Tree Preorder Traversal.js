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
 //recursive
var preorderTraversal = function(root) {
   var result=[];
   
   if (root!==null){
     traverseTree(root, result);
   }
   
   return result;
};
function traverseTree(node, result){
    if (node.val!==null){
        result.push(node.val);
    }
    
    if(node.left!==null){
        traverseTree(node.left,result);
    }
    
     if(node.right!==null){
        traverseTree(node.right,result);
    }
    
     if (node.left===null && node.right===null){
        return result;
     }
}
