/**
 * @param {number[]} nums
 * @return {number}
 */
 //non recursive
 var maxCoins = function(nums) {
    nums.push(1);
    nums.unshift(1);
    var dp=[];
    var len=nums.length;
    for (var i=0;i<len;i++){
        dp[i]=[];
        for(var j=0;j<len;j++){
            dp[i][j]=0;
        }
    }
    
    for (var l=2;l<len;l++){
        for (var left=0;left<len-l;left++){
            var right=left+l;
            for (var last=left+1;last<right;last++){
                dp[left][right]=Math.max(dp[left][right],dp[left][last]+dp[last][right] +nums[last]*nums[left]*nums[right]);
            }
        }
    }
    
    
    return dp[0][len-1];
}

 
 //recursive
var maxCoins = function(nums) {
    nums.push(1);
    nums.unshift(1);
    var dp=[];
    var visited=[];
    var len=nums.length;
    for (var i=0;i<len;i++){
        dp[i]=[];
        visited[i]=[];
        for(var j=0;j<len;j++){
            dp[i][j]=0;
            visited[i][j]=0;
        }
    }
    
    return searchMaxCoins(nums,dp,0,len-1,visited);
}

function searchMaxCoins(nums,dp,left,right,visited){
    if (visited[left][right]){
        return dp[left][right];
    }
    if (right-left<2){
        return 0;
    }
    if (left+2===right){
        return nums[left+1] * nums[left]*nums[right];
    }
    
    for (var last=left+1;last<right;last++){
        var dpL=searchMaxCoins(nums,dp,left,last,visited);
        var dpR=searchMaxCoins(nums,dp,last,right,visited);
        var cur=nums[last] * nums[left]*nums[right];
        dp [left][right]=Math.max(dp[left][right],dpL+dpR+cur);
    }
    
    visited[left][right]=1;
    return dp[left][right];
}
