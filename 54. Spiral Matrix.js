/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var spiralString=[];
    
    if (matrix.length===0){
        return spiralString;
    }
    
    var row=matrix.length;
    var col=matrix[0].length;
    var x=0, y=0;
    
    while (row>0 && col>0){
        
        if (row===1){
            for (var i=0;i<col;i++){
                spiralString.push(matrix[x][y++]);
            }
            break;
        }
        if (col===1){
            for (i=0;i<row;i++){
                spiralString.push(matrix[x++][y]);
            }
            break;
        }
         
        //up
        for(i=0;i<col-1;i++){
            spiralString.push(matrix[x][y++]);
        }
        
        //right
        for(i=0;i<row-1;i++){
            spiralString.push(matrix[x++][y]);
        }
        
        //down
        for(i=0;i<col-1;i++){
            spiralString.push(matrix[x][y--]);
        }
        
        //left
        for(i=0;i<row-1;i++){
            spiralString.push(matrix[x--][y]);
        }
        
        row-=2;
        col-=2;
        x+=1;
        y+=1;
        
    }
    
    
    return spiralString;
};
