/**
 * @param {number} n
 * @return {number}
 */
 
 //The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from three sorted lists: L1, L2, and L3.
//Assume you have Uk, the kth ugly number. Then Uk+1 must be Min(L1 * 2, L2 * 3, L3 * 5).
//巧妙的三个list，以及track indexes
var nthUglyNumber = function(n) {
    var dp=[];
    dp[0]=1;
    
    var i2=0,i3=0,i5=0;
    var m2,m3,m5;
    for (var i=1;i<n;i++){
        m2=dp[i2]*2;
        m3=dp[i3]*3;
        m5=dp[i5]*5;
        
        dp[i]=Math.min(m2,m3,m5);
        if (dp[i]===m2){
            i2++;
        }
        
        if (dp[i]===m3){
            i3++;
        }
        
        if (dp[i]===m5){
            i5++;
        }
    }
    return dp[n-1];
};
