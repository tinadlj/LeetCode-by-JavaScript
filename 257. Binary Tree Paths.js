/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    r=[];
    if(root===null){
        return [];
    }
    if (root.left===null && root.right===null){
        return [root.val+''];
    }
    
    if (root.left!==null){
        findPaths(root.left,root.val+'');
    }
    
    if (root.right!==null){
        findPaths(root.right,root.val+'');
    }
    return r;
};
function findPaths(l,temp){
    temp+= "->"+l.val;
     if(l.left===null && l.right ===null){
        r.push(temp);
        return;
    }
    
    if (l.left!==null){
        findPaths(l.left,temp);
    }
    
    if (l.right!==null){
        findPaths(l.right,temp);
    }
}
