/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
 // consider: 1. edges; 2. sign; 3. same reminder but different numerator; 4. fraction
var fractionToDecimal = function(numerator, denominator) {
    if(numerator===0){
        return '0';
    }
    
    if (denominator===0){
        return Infinity+'.(NaN)';
    }
    
    
    var ht={};
    var result=[];
    var reminder=0;
    var flag=false;
    if (numerator*denominator<0){
        var sign='-';
    }
    denominator=Math.abs(denominator);
    numerator=Math.abs(numerator);
    
    while(numerator>0){
        reminder=numerator%denominator;
        result.push(Math.floor(numerator/denominator));
            
        if(ht[reminder] && result[ht[reminder]]===result[result.length-1]){
            result.splice(ht[reminder],0,'(');
            result[result.length-1]=')';
            break;
        }
        
        ht[reminder]=result.length-1;
        numerator=reminder*10;
    }
    if (result.length>1){
        result.splice(1,0,'.');
    }
    
    if (sign==='-'){
        result.unshift(sign);
    }

    return result.join("");
};
