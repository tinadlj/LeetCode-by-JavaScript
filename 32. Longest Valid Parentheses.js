/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var max=0,count=0;
    var open=[];
    for(var i=0;i<s.length;i++){
        if (s[i]==='('){
            open.push([i,count]);
        }else if(s[i]===')'){
            if(open.length===0){
                count=0;
            }
            else {
                count+=2;
                open.pop();
                if(open.length===0){
                     max>count?max:max=count;
                }
                else{
                    var t=open[open.length-1][1];
                    max>(count-t)?max:max=(count-t);
                }
            }
        }
    }
    
    return max;
};
