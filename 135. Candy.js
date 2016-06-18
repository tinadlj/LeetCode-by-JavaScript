/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var numOfCandy=0;
    var candy=[];
    for (var i=0;i<ratings.length;i++){
        if (i===0){
            candy[i]=1;
        }else{
            if (ratings[i]>ratings[i-1]){
                candy[i]=candy[i-1]+1;
            }
            else {
                candy[i]=1;
            }
        }
    }
    
    for (var j=ratings.length-1;j>=0;j--){
        if (j<ratings.length-1 && ratings[j]>ratings[j+1]){
            candy[j]=Math.max(candy[j],candy[j+1]+1);
        }
        numOfCandy+=candy[j];
    }
    
    return numOfCandy;
};
