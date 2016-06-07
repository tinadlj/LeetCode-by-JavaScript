/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 // use loop 
var isSymmetric = function(root) {
    var nodeList=[];
    if(root){
        if (!root.left && !root.right){
            return true;
        }
        else if (!root.left || !root.right){
            return false;
        }
        nodeList.push(root.left);
        nodeList.push(root.right);
    }
    
    while(nodeList.length>0){
        var left=nodeList.shift();
        var right=nodeList.shift();
        
        if (left.val!==right.val){
            return false;
        }
        
        if ((left.left && !right.right) || (!left.left && right.right) ||(left.right && !right.left) || (!left.right && right.left)){
            return false;
        }
        
        if (left.left){
            nodeList.push(left.left);
        }
        if (right.right){
            nodeList.push(right.right);
        }
        if (left.right){
            nodeList.push(left.right);
        }
        if (right.left){
            nodeList.push(right.left);
        }
    }
    
    return true;
    
};

// use recurive

var isSymmetric = function(root) {
    var nodeList=[];
    if(root){
        return isPalindrome(root.left,root.right);
    }
    
    return true;
    
};

function isPalindrome(left,right){
    if (!left && !right){
        return true;
    }
    if ((left && !right) || !left && right || left.val!=right.val){
        return false;
    }

    return isPalindrome(left.left,right.right) && isPalindrome(left.right,right.left);
    
}
