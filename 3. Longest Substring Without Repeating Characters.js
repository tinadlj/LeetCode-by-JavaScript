/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxl=0;
    var start=0;
    var visited={};
    
    for (var i=0;i<s.length;i++){
            if (visited[s[i]] !==undefined && visited[s[i]]>=start ) {
                maxl=((i-start)>maxl)?(i-start):maxl;
                start=visited[s[i]]+1;
            }
            else if (i==s.length-1)
            {
                maxl=((i+1-start)>maxl)?(i+1-start):maxl;
            }
        visited[s[i]]=i;
    }
    
    
    return maxl;
};
