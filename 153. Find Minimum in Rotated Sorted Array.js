//find the position when start+1=end && nums[start]>nums[end]
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums===null){
        return null;
    }
    if (nums[0]<=nums[nums.length-1]){
        return nums[0];
    }
    
    var start=0; 
    var end=nums.length-1;
    var mid=0;
    
    while(start<end){
        mid=(start+end)/2 |0;
        if(nums[mid]>nums[mid+1]){
            return nums[mid+1];
        }else if (mid>=1 && nums[mid-1]>nums[mid]){
            return nums[mid];
        }else if (nums[mid]<=nums[end]){
            end=mid;
        }else {
            start=mid+1;
        }
        
    }
    return nums[start] ;
    
};
