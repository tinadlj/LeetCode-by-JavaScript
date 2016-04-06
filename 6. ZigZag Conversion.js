/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var r=[];
    if (numRows==1)
        return s;
    
    for (var i=0; i<numRows;i++){
        var j=i;
        while (j<s.length){
            r.push(s[j]);
            if (i!=0&&i!=numRows-1&&(j+(numRows-1-i)*2)<s.length)
                r.push(s[j+(numRows-1-i)*2]);
            j+=(numRows-1)*2;
        }
    }
    return r.join("");
};
