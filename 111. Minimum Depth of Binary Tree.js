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
 //recursive method for DFS, O (V+M)
var minDepth = function(root) {
    if (!root){
        return 0;
    }
    
    return findDepth(root,0);
};

function findDepth(node,depth){
    depth++;
    if (!node.left && !node.right){
        return depth;
    }
    
    if (node.left && node.right){
        return Math.min(findDepth(node.left,depth),findDepth(node.right,depth));
    }
    
    if (node.left){
        return findDepth(node.left,depth);
    }
    
    if (node.right){
        return findDepth(node.right,depth);
    }
    
}

//Non recursive BFS,queue (shift + push), O(power(2,min(H))-1)
var minDepth = function(root) {
    if (!root){
        return 0;
    }
    var queue=[];
    
    queue.push(root);
    var breadth=1;
    var depth=1;
    
    while(breadth>0){
        var t=queue.shift();
        breadth-=1;
        if (!t.left && !t.right){
            return depth;
        }
        
        if (t.left){
            queue.push(t.left);
        }
        if (t.right){
            queue.push(t.right);
        }
        
        if (breadth===0 && queue.length>0){
            breadth=queue.length;
            depth++;
        }
    }
    
    return depth;
    
};
