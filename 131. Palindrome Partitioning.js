/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var temp=[];
    var result=[];
    
    if (s===null){
        return result;
    }    
    
    generate(s,0,temp,result);
    
    return result;
};

function generate(s,index,temp,result){
    if (index===s.length){
        result.push(temp.slice());
        return;
    }
    
    for (var i=index;i<s.length;i++){
        var ts=s.substring(index,i+1);
        if (isPalindrome(ts)){
            temp.push(ts);
            generate(s,i+1,temp,result);
            temp.pop();
        }
    }
}

function isPalindrome(a){
    if (a===a.split("").reverse().join("")){
        return true;
    }
    else {
        return false;
    }
}
