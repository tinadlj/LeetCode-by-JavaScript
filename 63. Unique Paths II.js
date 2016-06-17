/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var dp=[];
    
    for(var row=0;row<obstacleGrid.length;row++){
        dp[row]=[];
        for (var col=0;col<obstacleGrid[0].length;col++){
            if (obstacleGrid[row][col]===1){
                dp[row][col]=0;
            }else if (row===0){
                if (col===0){
                    dp[row][col]=1;
                }else {
                    dp[row][col]=dp[row][col-1];
                }
            }else if (col===0){
                dp[row][col]=dp[row-1][col];
            }else {
                dp[row][col]=dp[row][col-1] +dp[row-1][col];
            }
        }
    }
    
    return dp[row-1][col-1];
};
