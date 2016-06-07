/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums===null){
        return null;
    }
    
    if (nums.length===1){
        return 0;
    }
    
    var start=0;
    var end=nums.length-1;
    
    var mid=0;
    
    while( start<=end){
        mid = (start+end)/2 |0;
        
        if (mid===0 && nums[mid]>nums[mid+1]){
            return mid;
        }
        if (mid===nums.length-1 && nums[mid]>nums[mid-1]){
            return mid;
        }
        
        if (nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
            return mid;
        }else if (nums[mid]<nums[mid-1] && nums[mid]>nums[mid+1]){
            end=mid-1;
        }else {
            start=mid+1;
        }
    }
    
    return end;
};
