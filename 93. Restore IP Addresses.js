/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s.length<4){
        return [];
    }
    
    var temp=[];
    var result=[];
    
    generate(1,s,0,temp,result);
    
    return result;
};

function generate(section, s , index , temp, result){
    if (section>5 || index>s.length){
        return;
    }
    
    if (section===5){
        if (index===s.length){
        result.push(temp.join("."));
        }
        return;
    }
    
    if (s[index]=='0'){
        temp.push(0);
        generate(section+1, s, index+1 , temp, result)
        temp.pop();
    }else {
        for (var i=index; i<s.length;i++){
            t=parseInt(s.substring(index,i+1));
            if (t<=255){
                temp.push(t);
                generate(section+1, s , i+1 , temp, result);
                temp.pop();
            }
        }
    }
}
