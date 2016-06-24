/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 /*
General case 1: dp[i][j] = dp[i][j - 1] if t[i - 1] != s[j - 1];
General case 2: dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1] if t[i - 1] == s[j - 1];
Boundary case 1: dp[0][j] = 1 for all j;
Boundary case 2: dp[i][0] = 0 for all positive i.
The 2D matrix is simply for dp[i - 1][j - 1] accumulate
三角矩阵
 */
 
var numDistinct = function(s, t) {
    if (t.length>s.length){
        return 0;
    }
    var dp=[];
    dp[0]=1;  -- initial corner is 1
    for (var i=0;i<s.length;i++){
        for (var j=t.length-1;j>=0;j--){ --reverse order so that you don't need to store the previous round value
            dp[j+1]=(dp[j+1] || 0);
            dp[j]=(dp[j] || 0);

            if (s[i]===t[j]){
                dp[j+1]+=(dp[j])||0;
            }
        }
    }
    
    return dp[t.length];
};
