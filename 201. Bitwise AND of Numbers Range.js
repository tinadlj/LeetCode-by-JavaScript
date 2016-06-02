/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var diff=n-m;
    var count=0;
    
    while(diff>0){
        m=m>>1;
        n=n>>1;
        diff=diff>>1;
        count++;
    }
    
    return (m & n )<<count;
};
