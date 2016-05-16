/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root===null){
        return [];
    }
    if (root.left===null && root.right===null){
        return [[root.val]];
    }
    var r={};  
    r[0]=[];
    r[0].push(root.val);
    if(root.left!==null){
        iteratorTree(root.left,1,r);
    }
    if(root.right!==null){
        iteratorTree(root.right,1,r);
    }
    
    return Object.keys(r).map((key)=>r[key]);
};
function iteratorTree(node,i,r){
    r[i]=r[i]||[];
    r[i].push(node.val);
    if(node.left===null && node.right===null){
        return;
    }
    
    if(node.left!==null){
        iteratorTree(node.left,i+1,r);
    }
    
    if(node.right!==null){
        iteratorTree(node.right,i+1,r);
    }
    
}
//recursive version,stack
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    
    if(root === null){
        return result;
    }
    
    var queue = [];
    var temp = [];
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    queue.push(root);
    
    while(queue.length !== 0){
        var p = queue.shift();
        temp.push(p.val);
        curLvlCnt--;
        
        if(p.left){
            queue.push(p.left);
            nextLvlCnt++;
        }
        if(p.right){
            queue.push(p.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt === 0){
            result.push(temp);
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            temp = [];
        }
    }
    
    return result;
};
