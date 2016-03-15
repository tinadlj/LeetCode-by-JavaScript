/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if (nums.length<2)
        return false;
        
    var a={};//use associate Array
    for(var i=0; i<nums.length;i++)
    {
        if (a[nums[i]]!==undefined)
        {
            if (i-a[nums[i]]<=k)
                return true;
            else 
                a[nums[i]]=i; //override the value with the closest index
        }
        else
            a[nums[i]]=i; // add a new element to the Array
    }
    return false;
    
};
