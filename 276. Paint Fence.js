/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n===0){
        return 0;
    }
    
    var dp=[];
    dp.push([k,0]) //0 means single, 1 means the same with previous one, cannot repeat more
    
    for (var i=1;i<n;i++){
        var t=dp[i-1];
        dp.push([(t[0]+t[1])*(k-1),t[0]]);
    }
    
    return dp[i-1][0]+dp[i-1][1];
};
