/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length===0&&t.length===0)
        return true;
    if (s.length!=t.length)
        return false;
    var tempA={};
    var tempB={};
    for(var i=0;i<s.length;i++){
        if(tempA[s[i]]===undefined && tempB[t[i]]===undefined)
            {
                tempA[s[i]]=t[i];
                tempB[t[i]]=s[i];
            }
        else if(tempA[s[i]]!=t[i] || tempB[t[i]]!=s[i] )
            return false;
            
    }
    
    return true;
};
