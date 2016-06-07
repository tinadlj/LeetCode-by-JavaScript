/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root){
        return null;
    }

    var nodeList=[];
    
    findSmallNum(root,nodeList,k)
    return nodeList[k-1].val;
};

function findSmallNum(node,nodeList,level){
    if (node.left){
        findSmallNum(node.left, nodeList,level);
    }
    nodeList.push(node);
    level--;
    if (level<=0){
        return;
    }
    if (node.right){
        findSmallNum(node.right, nodeList,level);
    }
    
}
