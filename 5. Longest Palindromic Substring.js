/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var r="";
    if (s.length<=1)
        return s;
        
    for (var i=0;i<s.length;i++){
        for (var j=1;j<=i;j++){
            if (s[i-j]!=s[i+j]){
                    r=(r.length>s.substring(i-j+1,i+j).length)?r:s.substring(i-j+1,i+j);
                    break;
            }
            else if (j==i && s[i-j]==s[i+j])
            {
                r=(r.length>s.substring(i-j,i+j+1).length)?r:s.substring(i-j,i+j+1);
                    break;
            }
        }
        for (var k=0;k<=i;k++){
            if (s[i-k]!=s[i+1+k]){
                    r=(r.length>s.substring(i-k+1,i+k+1).length)?r:s.substring(i-k+1,i+k+1);
                    break;
            }
            else if (k==i && s[i-k]==s[i+1+k]){
                 r=(r.length>s.substring(i-k,i+k+1+1).length)?r:s.substring(i-k,i+k+1+1);
                    break;
            }
        }
    }
    return r;
};
