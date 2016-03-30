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

//second way
function parenthesesAreBalanced(string) {
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
