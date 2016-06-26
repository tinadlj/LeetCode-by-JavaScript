/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max=nums[0];
    var positiveMax=[];
    var negativeMin=[];
    if (nums[0]>0){
        positiveMax[0]=nums[0];
    }else if (nums[0]<0){
        negativeMin[0]=nums[0];
    }
    for (var i=1;i<nums.length;i++){
        var t=nums[i];
        if (t>0){
            positiveMax[i]=Math.max((positiveMax[i-1] || 0 )*t ,t); // continue with current path or start a new path
            negativeMin[i]=(negativeMin[i-1] ||0)*t; // continue with current path or there is no negativeMin in previous num
        } else if (t<0){
            positiveMax[i]=(negativeMin[i-1] || 0)*t; // continue with current path or there is no negativeMin in previous num
            negativeMin[i]=Math.min(( positiveMax[i-1] || 0)*t,t); // continue with current path or start a new path
        }
        if(max<(positiveMax[i] || 0)){
            max=(positiveMax[i] || 0);
        }
    }
    return max;
};
