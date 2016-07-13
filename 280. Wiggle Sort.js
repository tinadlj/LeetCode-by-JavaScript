/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a,b)=>a-b);
    
    for (var i=0;i<nums.length-1;i=i+2)
    {
        var t=nums.pop();
        nums.splice(i+1,0,t);
    }
    
};
