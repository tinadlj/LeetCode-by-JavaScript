/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 
 由于inorder是中序遍历，所以k左边的就是根节点左子树的中序遍历、k右边的就是根节点右子树的中序遍历。

并且，由于我们已经知道了根节点左子树的节点数（与中序遍历长度相同），不妨设为l，
我们可以知道preorder从1到l+1就是根节点左子树的前序遍历，剩下的最后一部分就是根节点右子树的前序遍历。

也就是说，我们可以计算出左子树、右子树的前序遍历和中序遍历，从而可以用分治的思想，将规模较大的问题分解成为两个较小的问题，
然后递归的进行处理，还原左子树和右子树，最后连通根节点一起组成一棵完整的树。
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length===0){
        return null;
    }
    if(preorder.length !== inorder.length) {
        return null;
    }
    
    return generateSubTree(preorder,0,preorder.length-1,inorder,0);
};

function generateSubTree(preorder,i,maxI,inorder,j){
    if ( i>maxI ){
        return null;
    }
    var val=preorder[i];
    var node=new TreeNode(val);
    var midIndex=inorder.indexOf(val);
    
    
    if (midIndex===-1){
        return null;
    }
    else{
        node.left=generateSubTree(preorder,i+1,i+midIndex-j, inorder,j);
        node.right=generateSubTree(preorder,i+midIndex-j+1,maxI,inorder,midIndex+1);
    }
    
    return node;
}
