/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 
// O(m+n)
var searchMatrix = function(matrix, target) {
    var column=matrix[0].length-1;
    
    for (var row=0;row<matrix.length && column >=0;row++){
        while (matrix[row][column]>target){
            column--;
        }
        if(matrix[row][column]===target){
            return true;
        }
    }
    
    return false;
};

//when n>>m, use binary search to improve the performance
