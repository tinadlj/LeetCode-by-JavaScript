/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var a=s.split("").reverse();
    var r=a[0].charCodeAt(0)-'A'.charCodeAt(0)+1;
    for (var i=1;i<a.length;i++)
    {
            r+=(a[i].charCodeAt(0)-'A'.charCodeAt(0)+1)*Math.pow(26,i);
    }  
    return r;
};
