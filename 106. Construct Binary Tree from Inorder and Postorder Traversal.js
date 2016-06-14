/*
本题在属于二叉树遍历的经典题目，已知二叉树的两个遍历序列构造二叉树，有如下性质：

若已知先序和中序，则可以构造出唯一的二叉树

若已知先序和后序，则可以构造出多颗不同的二叉树

若已知中序和后序，则可以构造出唯一的二叉树
可以肯定后序遍历序列中最后一个数一定是当前二叉树的根节点root。
又因为二叉树不存在相同的数，我们可以找到root在中序遍历中位置p。

则我们可以分别找到两颗子树对应的中序和后序遍历：

左子树的中序 = inOrder[1 .. p - 1]
左子树的后序 = postOrder[1 .. p - 1]
右子树的中序 = inOrder[p + 1 .. n]
右子树的后序 = postOrder[p .. n - 1]

计算出left side length/right side length 再递归
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return generateSubTree(inorder,postorder,0,inorder.length-1,0,postorder.length-1)
};

function generateSubTree(inorder,postorder,i,maxI,minJ,j){
    if (i>maxI || minJ>j){
        return null;
    }
    var val=postorder[j];
    var node=new TreeNode(val);
    var midIndex=inorder.indexOf(val);
    var leftLength=midIndex-i;
    
    node.left=generateSubTree(inorder,postorder,i,midIndex-1,minJ,minJ+leftLength-1);
    node.right=generateSubTree(inorder,postorder,midIndex+1,maxI,minJ+leftLength,j-1);
    
    return node;
}
