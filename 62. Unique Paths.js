/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var numOfPathes=[];
    
    for (var row=0;row<m;row++){
        numOfPathes[row]=[];
        for (var col=0;col<n;col++){
            if (numOfPathes[row][col]){
                continue;
            }
            if (row===0 || col===0){
                numOfPathes[row][col]=1;
            }
            else{
            numOfPathes[row][col]=numOfPathes[row][col-1]+numOfPathes[row-1][col];
            }
        }
    }
    
    return numOfPathes[m-1][n-1];
};
