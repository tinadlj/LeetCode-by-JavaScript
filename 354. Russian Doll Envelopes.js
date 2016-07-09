/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort(function (a,b){
        if (a[0]>b[0]){
            return 1; //always remember that return 1 instead of true
        }else if(a[0]===b[0] && a[1]>b[1]){
            return 1;
        }
        return -1;
    });
    var dp=[];
    var max=0;
    for (var i=0;i<envelopes.length;i++){
        dp[i]=1;
        for (var j=0;j<i;j++){
            if (envelopes[i][0]>envelopes[j][0] && envelopes[i][1]>envelopes[j][1] && dp[j]+1>dp[i]){
                dp[i]=dp[j]+1;
            }
        }
        if (dp[i]>max){
            max=dp[i];
        }
    }
    return max;
};
