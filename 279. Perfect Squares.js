/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    var sqr=Math.sqrt(n) |0;
    var dp=[];
    dp[0]=0;
    for (var i=1;i<=n;i++){
        dp[i]=Number.MAX_VALUE;
    }
    
    for (i=0;i<=n;i++){
        for(var j=1;j<=sqr && i+j*j<=n;j++){
            dp[i+j*j]=Math.min(dp[i+j*j],dp[i]+1);
        }
    }
    
    return dp[n];
};
