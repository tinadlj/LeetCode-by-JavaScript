/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var dp=[];
    var max=0;
    dp[-1]=[];
    for (var i=0;i<matrix.length;i++){
        dp[i]=[];
        for (var j=0;j<matrix[0].length;j++){
            if (matrix[i][j]!=0){
            dp[i][j]=Math.min((dp[i][j-1] || 0) , (dp[i-1][j] || 0),(dp[i-1][j-1] || 0 ))+1;
            (dp[i][j]>max)? max=dp[i][j] : max;
            }else {
                dp[i][j]=0;
            }
        }
    }
    
    return max*max;
};
