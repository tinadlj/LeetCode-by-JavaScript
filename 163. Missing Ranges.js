/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    var result=[];
    if (nums.length===0 || nums[nums.length-1]<upper){
        nums.push(upper+1);
    }
    if (nums[0]>lower){
        nums.unshift(lower-1);
    }
    for (var i=0;i<nums.length-1;i++){
        if (nums[i]>=upper){
            break;
        }else if (nums[i+1]<=lower){
            continue;
        }
        else if (nums[i+1]-nums[i]>2 ){
            var s=Math.max((nums[i]+1),lower);
            var e=Math.min((nums[i+1]-1),upper);
            result.push(s + "->"+ e);
        }else if (nums[i+1]-nums[i]===2 && nums[i]+1>=lower && nums[i]+1<=upper){
            result.push(nums[i]+1 + "" );
        }
    }
    
    
    return result;
};
