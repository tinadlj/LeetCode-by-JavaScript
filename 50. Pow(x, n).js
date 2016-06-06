/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n===0){
        return 1;
    }
    
    if (n<0){
        return 1/myPow(x,n*-1);
    }
    
    var halfPow=myPow(x, Math.floor(n/2));
    
    if (n%2===1){
        return halfPow * halfPow *x;
    }else{
        return halfPow * halfPow;
    }
};
