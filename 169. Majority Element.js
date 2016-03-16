/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length<2)
        return nums[0];
        
    nums.sort();
    var b=nums[0];
    var count=1;
    var m=Math.floor(nums.length/2);
    for(var i=1;i<nums.length;i++){
        if(nums[i]==b)
            {
                count++;
                if (count>m)
                    return b;
            }
        else 
            b=nums[i];
    }
    
};
