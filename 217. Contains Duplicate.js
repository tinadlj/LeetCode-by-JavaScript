/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length<2)
        return false;
    var a=new Set();//Set is used to store unique value of any type, whether primitive or object values
    for(var i=0;i<nums.length;i++){
        if (a.has(nums[i]))
            return true;
        else
            a.add(nums[i]);
    }
    return false;
};
