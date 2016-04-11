/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums =nums.sort(function (a,b){return a-b});
    var t=nums[0];
    for (var i=1;i<nums.length;i++){
        if(nums[i]==t){
            return t;
        }
        else{
            t=nums[i];
        }
    }
};
