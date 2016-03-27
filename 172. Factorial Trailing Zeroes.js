/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var n5=0;
    var x=5;
    while (n>=x){
        n5+=Math.floor(n/x);
        x*=5;
    }
    
    return n5;
};
