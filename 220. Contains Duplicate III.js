/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(nums.length<2)
        return false;
    var a={};
    a[nums[0]]=0;
    for (var i=1;i<nums.length;i++){
       var b=(i-k)>0?(i-k):0;
       for(;b<i;b++){
           if (nums[i]-nums[b]<=t && nums[b]-nums[i]<=t)
            return true;
       }
    }
    return false;

};
