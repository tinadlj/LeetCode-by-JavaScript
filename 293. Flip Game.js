var generatePossibleNextMoves = function(s) {
    var result=[];
    var i=0;
    var len=s.length-1;
    while(i<len){
        if (s[i]==='+' && s[i+1]==='+'){
            var t=s.split("");
            t.splice(i,2,'--');
            result.push(t.join(""));
        }
        i++;
    }
    
    return result;
};
