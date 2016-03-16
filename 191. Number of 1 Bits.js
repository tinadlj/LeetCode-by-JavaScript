/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var a= n.toString(2);
    var count=0;
    for (var i=0;i<a.length;i++){
        if (a.charAt(i)==1)
            count++;
    }
    return count;
    
};
