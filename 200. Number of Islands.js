/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var num=0;
    
    for ( i=0;i<grid.length;i++){
        for ( j=0;j<grid[0].length;j++){
            if (grid[i][j]==1 ){
                num++;
                findTree(i,j,grid);
            }
        }
    }
    
    return num;
};

function findTree(x,y,grid){
    grid[x][y]='0';
    
        if (x+1<grid.length && grid[x+1][y]==1){
            findTree(x+1,y,grid);
        }
        if (y+1<grid[0].length && grid[x][y+1]==1){
            findTree(x,y+1,grid);
        }
        if (x-1>=0 && grid[x-1][y]==1){
            findTree(x-1,y,grid);
        }
        if (y-1>=0 && grid[x][y-1]==1){
            findTree(x,y-1,grid);
        }
}
