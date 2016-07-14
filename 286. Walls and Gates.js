/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if (rooms.length===0){
        return;
    }
    var maxLen=2147483647;
    var visited=[];
    for (var i=0;i<rooms.length;i++){
        visited[i]=[];
        for (var j=0;j<rooms[0].length;j++){
                if(rooms[i][j]===2147483647){
                    rooms[i][j]=findGate(i,j,rooms,visited);
                }
        }
    }
};
function findGate(i,j,rooms,visited){
    var maxLen=2147483647;
    if ( i<0 || j<0 || i>=rooms.length  || j>=rooms[0].length || rooms[i][j]===-1 ){
        return maxLen;
    }
    
    visited[i]=visited[i]||[];
    if (visited[i][j]){
        return rooms[i][j];
    }
    if (rooms[i][j]>0  && rooms[i][j]<2147483647){
        return rooms[i][j];
    }
    
    if (rooms[i][j]===0){
        return 0;
    }
    visited[i][j]=true;
    
    var up=findGate(i-1,j,rooms,visited);
    var left=findGate(i,j-1,rooms,visited);
    var down=findGate(i+1,j,rooms,visited);
    var right=findGate(i,j+1,rooms,visited);
    
    visited[i][j]=false;
    
    var min= Math.min(down,right,up,left);
    return (min===maxLen)?maxLen:min+1;
}
