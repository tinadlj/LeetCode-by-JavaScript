/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var r=[];
    for(var i=0;i<nums.length;i++){
        if(r.indexOf(nums[i])!=-1){
            r.splice(r.indexOf(nums[i]),1);
        }
        else
            r.push(nums[i]);
    }
    return r;
};
