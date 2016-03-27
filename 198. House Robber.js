/**
 * @param {number[]} nums
 * @return {number}
 * 10 1 2 80 2 3 
 */
var rob = function(nums) {
    if (nums.length===0)
        return 0;
    
    if (nums.length===1)
        return nums[0];
    var r=[];
    r[0]=nums[0];
       
    for(var i=1;i<nums.length;i++){
        if (i-3>=0)
            r[i]= (r[i-3]>r[i-2])?(r[i-3]+nums[i]):(r[i-2]+nums[i]);
        else if (i===2)
            r[i]= (r[0]+nums[i]>r[1])?r[0]+nums[i]:r[1];
        else 
            r[i]=nums[1];
    }
    
    return r[nums.length-1]>r[nums.length-2]?r[nums.length-1]:r[nums.length-2];
};
