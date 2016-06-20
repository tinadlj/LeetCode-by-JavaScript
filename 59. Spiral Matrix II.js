/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n<0){
        return null;
    }
    
    var matrix=[];
    var val=1;
    var max=Math.pow(n,2);
    var x=0,y=0;
    
    for(var i=0;i<n;i++){
        matrix[i]=[];
    }
    var mid=parseInt(n/2);
    for (var level=0;level<mid;level++){
        x=level,y=level;
        //up
        for (;y<n-level-1;y++){
            matrix[x][y]=val++;
        }
        
        //right
        for (;x<n-level-1;x++){
            matrix[x][y]=val++;
        }
        
        //down
        for (;y>level;y--){
            matrix[x][y]=val++;
        }
        
        //left
        for (;x>level;x--){
            matrix[x][y]=val++;
        }
        
    }
    if(n%2===1){
        matrix[mid][mid]=val;
    }
    
    return matrix;
};
