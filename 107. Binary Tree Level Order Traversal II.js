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
var levelOrderBottom = function(root) {
    var result=[];
    var temp=[];
    var nodeList=[];
    if(root){
        nodeList.push(root);
    }
    while(nodeList.length>0){
        var length=nodeList.length;
        temp=[];
        for (var i=0;i<length;i++){
            var t=nodeList.shift();
            temp.push(t.val);
            if (t.left){
                nodeList.push(t.left);
            }
            if (t.right){
                nodeList.push(t.right);
            }
        }
        result.unshift(temp);
    }
    return  result;
};
