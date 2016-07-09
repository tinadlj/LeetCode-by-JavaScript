/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //use dynamic programming, sort the array, dp stores the longest set length which include the current element
 //then in pre array, it likes the pointer which point the previous element in the set
var largestDivisibleSubset = function(nums) {
    if (nums.length<2){
        return nums;
    }
    nums.sort((a,b)=>a-b);
    var dp=[];
    var pre=[];
    var maxLen=0;
    var maxIndex=0;
   
    for (var i=0;i<nums.length;i++){
         dp[i]=1;
        for (var j=0;j<i;j++){
            if (nums[i]%nums[j]===0 && dp[j]+1>dp[i]){
                dp[i]=dp[j]+1;
                pre[i]=j;
            }
        }
        if (dp[i]>maxLen){
            maxLen=dp[i];
            maxIndex=i;
        }
    }
    var ind=maxIndex;
    var result=[];
    while(ind !==undefined){
        result.unshift(nums[ind]);
        ind=pre[ind];
    }
    return result;
};
