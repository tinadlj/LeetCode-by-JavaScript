/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    if (nums.length===0){
        return 0;
    }
    var count=0;
    for (var i=0;i<nums.length;i++){
        var sum=nums[i];
        for (var left=i+1;left<nums.length-1;left++){
            sum+=nums[left];
            var right=nums.length-1;
            while(left<right){
                if (sum+nums[right]<target){
                    count++;
                }
                right--;
            }
            sum-=nums[left];
        }
    }
    return count;
};
