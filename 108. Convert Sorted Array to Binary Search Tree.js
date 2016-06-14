/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var root=new TreeNode();
    if (nums.length===0){
        return null;
    }
    
    generateTree(root,0,nums.length-1,nums);
    return root;
};
function generateTree(node,left,right,nums){
    var mid=(left+right)/2|0;
    node.val=nums[mid];
    
    if (left<mid){
        node.left=new TreeNode();
        generateTree(node.left,left,mid-1,nums);
    }
    
    if (mid<right){
        node.right=new TreeNode();
        generateTree(node.right,mid+1,right,nums);
    }
    
    return node;
}

//Create current node
var sortedArrayToBST = function(nums) {
    return generate(nums,0,nums.length-1);
};

var generate = function(nums, start, end){
    
    if(start > end){
        return null;
    }
    var midIndex = start + parseInt((end - start)/2);
    var midVal = nums[midIndex];
    
    var node = new TreeNode(midVal);
    node.left = generate(nums, start, midIndex-1);
    node.right = generate(nums, midIndex+1, end);
    
    return node;
}
