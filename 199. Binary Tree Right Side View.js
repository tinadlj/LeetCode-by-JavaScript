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
//another solution which is more efficient, from left to right, when it is the last node of current level, push
var rightSideView = function(root) {
    var answer = [];

    if(root === null){
        return answer;
    }

    var queue = [];
    queue.push(root);
    var curLvlCnt = queue.length;
    var nextLvlCnt = 0;
    
    while(queue.length !== 0){
        var node = queue.shift();
        curLvlCnt--;
        
        if(node.left){
            queue.push(node.left);
            nextLvlCnt++;
        }
        if(node.right){
            queue.push(node.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt <= 0){
            answer.push(node.val);
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
        }
        
    }
    
    return answer;
}
