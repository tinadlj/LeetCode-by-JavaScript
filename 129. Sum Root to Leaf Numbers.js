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
var sumNumbers = function(root) {
    var sum=[];
    if (root){
    findPath(root,[]);
    }
    else{
        return 0;
    }
    var result=0;
    for (var i=0;i<sum.length;i++){
        result+=parseInt(sum[i].join(""));
    }
    
    
    function findPath(node,path){
        path.push(node.val);
        if (!node.left && !node.right){
            if (path.length>0){
                sum.push(path.slice());
            }
            return;
        }
        if (node.left){
            findPath(node.left,path.slice());
        }
        if(node.right){
        findPath(node.right,path.slice());
        }
    }
    
    return result;
};
// another method: carry the parents' values to leaf nodes
var sumNumbers = function(root) {
    var total = 0;

    if(root === null){
        return total;
    }
    
    var queue = [];
    queue.push(root);
    
    while(queue.length !== 0){
        var node = queue.shift();
        
        if(node.left === null && node.right === null){
            total += parseInt(node.val);
        }
        
        if(node.left){
            node.left.val = '' + node.val + node.left.val;
            queue.push(node.left);
        }
        if(node.right){
            node.right.val = '' + node.val + node.right.val;
            queue.push(node.right);
        }
    }
    
    return total;
};
