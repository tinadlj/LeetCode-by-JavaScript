var reverseVowels = function(s) {
    var vowels=[];
    var vow="aeiouAEIOU";
    s=s.split("");
    for(var i=0;i<s.length;i++){
        if (vow.indexOf(s[i])!==-1){
            vowels.push([i,s[i]]);
        }
    }
    
    var ts,te;
    while (vowels.length>0){
        ts=vowels.pop();
        if (vowels.length>0){
            te=vowels.shift();
            s[ts[0]]=te[1];
            s[te[0]]=ts[1];
        }
        else{
            s[ts[0]]=ts[1];
        }
    }
    
    return s.join("");
    
};
