/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arra={};
    var arrb={};
    var arr=str.split(' ');
    
    if (pattern.length!==arr.length){
        return false;
    }
    
    for (var i=0;i<pattern.length;i++){
        if(arra[pattern[i]]===undefined){
            if (arrb[arr[i]]!==undefined){
                return false;
            }
            arra[pattern[i]]=arr[i];
            arrb[arr[i]]=pattern[i];
        }else{
            if(arra[pattern[i]]!=arr[i] || arrb[arr[i]]!==pattern[i]){
                return false;
            }
        }
    }
    
    return true;
};
