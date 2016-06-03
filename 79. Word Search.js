/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var used=[];
    if (word.length<=0){
        return false;
    }
    
    for(var i=0;i<board.length;i++){
        used[i]=[];
        for (var j=0;j<board[0].length;j++){
            used[i][j]=false;
        }
    }
    
    for(i=0;i<board.length;i++){
        j=0;
        while(board[i].indexOf(word[0],j)!==-1){
            if (word.length===1){
                return true;
            }
            j=board[i].indexOf(word[0],j);
            used[i][j]=true;
            if (findNext(board,i,j,word.slice(1),used)){
                return true;
            }
            else{
                used[i][j]=false;
            }
            j++;
        }
    }
    return false;
    
};
function findNext (board,i,j,letter,used){
    if (used[i+1] && !used[i+1][j] && board[i+1][j]===letter[0]){
        if (letter.length===1){
            return true;
        }
        else{
            used[i+1][j]=true;
            if( findNext(board,i+1,j,letter.slice(1),used)){
                return true;
            }
            else{
                used[i+1][j]=false;
            }
        }
    }
    if (used[i-1] &&!used[i-1][j] && board[i-1][j]===letter[0]){
        if (letter.length===1){
            return true;
        }
        else{
            used[i-1][j]=true;
            if( findNext(board,i-1,j,letter.slice(1),used)){
                return true;
            }
            else{
                used[i-1][j]=false;
            }
        }
    } 
    if (j>=1 &&!used[i][j-1] && board[i][j-1]===letter[0]){
        if (letter.length===1){
            return true;
        }
        else{
            used[i][j-1]=true;
            if( findNext(board,i,j-1,letter.slice(1),used)){
                return true;
            }
            else{
                used[i][j-1]=false;
            }
        }
    }  
    if (!used[i][j+1] && board[i][j+1]===letter[0]){
        if (letter.length===1){
            return true;
        }
        else{
            used[i][j+1]=true;
            if( findNext(board,i,j+1,letter.slice(1),used)){
                return true;
            }
            else{
                 used[i][j+1]=false;
            }
        }
    }
    
    return false;
}
