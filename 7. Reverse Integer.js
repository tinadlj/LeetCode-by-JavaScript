/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var r="";
    var t=x+"";
    if (t[0]=="-" ||t[0]=="+")
       r=t[0]+ t.substring(1).split("").reverse().join("");
    else 
        r=t.split("").reverse().join("");
    
    if (parseInt(r)>Math.pow(2,31)-1 ||parseInt(r)<Math.pow(-2,31))
        return 0;
    
    return parseInt(r);
};
