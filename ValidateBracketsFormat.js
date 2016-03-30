/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var r=[]; 
    s=s.split("");
    for (var i=0;i<s.length;i++){
        if (s[i]=='(')
            {
                r.push(s[i]);
                continue;
            }
        if (s[i]=='[')
            {
                r.push(s[i]);
                continue;
            }
        if (s[i]=='{')
            {
                r.push(s[i]);
                continue;
            }
        if ( r[r.length-1]=='[' && s[i]==']'){
            r.pop();
            continue;
        }
        if ( r[r.length-1]=='{' && s[i]=='}'){
            r.pop();
            continue;
        }
        if ( r[r.length-1]=='(' && s[i]==')'){
            r.pop();
            continue;
        }
        return false;
    }
    if (r.length==0)
        return true;
    else 
        return false;
};
