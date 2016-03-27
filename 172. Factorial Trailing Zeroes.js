/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n===0)
        return 0;
    var n5=0;
    t=Math.floor(Math.log(n)/Math.log(5));
    for(var i=1;i<=t;i++)
    {
        n5+=Math.floor(n/Math.pow(5,i));
    }
    
    return n5;
};
