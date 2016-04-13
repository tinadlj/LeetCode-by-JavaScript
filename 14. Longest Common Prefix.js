/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length===0)
        return "";
    var commonPrefix=strs[0];
    
    for (var i=1;i<strs.length;i++){
        var j=0;
        for (;j<strs[i].length && j<commonPrefix.length;j++){
            if (strs[i].charAt(j)!=commonPrefix.charAt(j)){
                break;
            }
        }
          commonPrefix=commonPrefix.substring(0,j);
    }
    
    return commonPrefix;
};
