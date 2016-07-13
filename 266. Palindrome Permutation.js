/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var HT={};
    for (var i=0;i<s.length;i++){
        HT[s[i]]=  HT[s[i]] || 0;
        HT[s[i]]++;
    }
    var flag;
    if (s.length%2===0){
        flag=true;
    }else {
        flag=false;
    }
    
    for (var t in HT){
        if (HT[t] % 2 !==0){
            if (flag===true){
                return false;
            }
            else{
                flag=true;
            }
        }
    }
    
    return true;
};
