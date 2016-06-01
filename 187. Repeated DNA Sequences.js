/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var arra={};
    var result=[];
    
    for (var i=0; i<s.length-9;i++){
        if (arra[s.substr(i,10)]!==undefined){
            if (arra[s.substr(i,10)]===1){
                result.push(s.substr(i,10));
            }
            arra[s.substr(i,10)]++;
        }else {
            arra[s.substr(i,10)]=1;
        }
    }
    return result;
    
};
