/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(var row=0;row<9;row++){
        var used={};
        for(var i=1;i<=9;i++){
            used[i]=false;
        }
        for(var col=0;col<9;col++){
            if(board[row][col]!=='.'&& used[board[row][col]]===true){
                return false;
            }
            else if(board[row][col]!=='.'){
                used[board[row][col]]=true;
            }
        }
    }
    
    for( col=0;col<9;col++){
         used={};
        for( i=1;i<=9;i++){
            used[i]=false;
        }
        for( row=0;row<9;row++){
            if(board[row][col]!=='.'&& used[board[row][col]]===true){
                return false;
            }
            else if(board[row][col]!=='.'){
                used[board[row][col]]=true;
            }
        }
    }
    
    for ( row=0;row<3;row++){
        for( col=0;col<3;col++){
            for( i=1;i<=9;i++){
            used[i]=false;
            }
            for( var j=row*3;j<row*3+3;j++){
                for (var k=col*3;k<col*3+3;k++){
                    if(board[j][k]!=='.'&& used[board[j][k]]===true){
                        return false;
                    }
                    else if(board[j][k]!=='.'){
                        used[board[j][k]]=true;
                    }
                }
            }
        }
        
    }
    
    return true;
};
