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
 //use queue, populate right to left, use flag to turn the insert on/off for this line, still need to push all the nodes to the queue
var rightSideView = function(root) {
    var result=[];
    var queue=[];
    var curLev=0;
    var preLev=0;
    var rightFlag=true;
    
    if (root!==null){
        queue.push(root);
    }
    preLev=1;
    
    while (queue.length>0) {
        var t=queue.shift();
        preLev--;
        if(rightFlag===true && t.val!==null){
            result.push(t.val);
            rightFlag=false;
        }
        
        if (t.right!==null){
            queue.push(t.right);
            curLev++;
        }
        if (t.left!==null){
            queue.push(t.left);
            curLev++;
        }
        if (preLev===0){
            rightFlag=true;
            preLev=curLev;
            curLev=0;
        }
        
    }
    
    return result;
};
