/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var s=0;
    var e=nums.length-1;
    var dif={};
    //var r=0;
    for (var i =0;i<nums.length;i++){
        if (dif[nums[i]]===undefined){
            dif[target-nums[i]]=i;
        }
        else 
            return [dif[nums[i]],i];
    }
    
    
};
