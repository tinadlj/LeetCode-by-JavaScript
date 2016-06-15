/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var hashMap={};
    for (var i =0;i<nums.length;i++){
        if(!hashMap[nums[i]]){
            hashMap[nums[i]]=1;
        }
    }
    
    var maxLen=0;
    for (var t in hashMap){
        var len=hashMap[t];
        var cur=t;
        while(hashMap[t-1]){
            len+=hashMap[t-1];
            t--;
            delete hashMap[t];
        }
        hashMap[cur]=len;
        if(len>maxLen){
            maxLen=len;
        }
    }
    
    
    return maxLen;
    
};
