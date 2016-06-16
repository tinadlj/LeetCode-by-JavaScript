/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<2){
        return 1;
    }
    var DP=[];
    DP[0]=1;
    DP[1]=2;
    var i=2;
    while(i<n){
        DP[i]=DP[i-2]+DP[i-1];
        i++;
    }
    return DP[n-1];
};
