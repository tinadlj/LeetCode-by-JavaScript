/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var dp=[];
    var maxLength=0;
    for (var i=0;i<matrix.length;i++){
        dp[i]=[];
        for (var j=0; j<matrix[0].length;j++){
            getLongestPath(matrix,i,j,dp);
            maxLength= Math.max(maxLength,dp[i][j]);
        }
    }
    return maxLength;
};
function getLongestPath(matrix,x,y,dp){
    var left=1,right=1,up=1,down=1;
    
    if (y>0 && matrix[x][y] < matrix[x][y-1]){
        if (dp[x][y-1]){
            left=dp[x][y-1]+1;
        }else {
            left=getLongestPath(matrix,x,y-1,dp)+1;
        }
    }
    
    if (y<matrix[0].length-1 && matrix[x][y] < matrix[x][y+1]){
        if (dp[x][y+1]){
            right=dp[x][y+1]+1;
        }else {
            right=getLongestPath(matrix,x,y+1,dp)+1;
        }
    }
    
    if (x>0 && matrix[x][y] < matrix[x-1][y]){
        if (dp[x-1] && dp[x-1][y]){
            up=dp[x-1][y]+1;
        }else {
            dp[x-1]=[];
            up=getLongestPath(matrix,x-1,y,dp)+1;
        }
    }
    
    if (x<matrix.length-1 && matrix[x][y] < matrix[x+1][y]){
        if (dp[x+1] && dp[x+1][y]){
            down=dp[x+1][y]+1;
        }else {
            dp[x+1]=[];
            down=getLongestPath(matrix,x+1,y,dp)+1;
        }
    }
    
    dp[x][y]=Math.max(left,right,up,down);
    
    return dp[x][y];
}
