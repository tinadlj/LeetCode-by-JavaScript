/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length<=0)
        return [];
    
    var dict=["","", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var result=[];
    var temp=[];
    findCombination(digits,dict,0,temp,result);
    
    return result;
};
function findCombination(digits, dict, index,temp, result){
    if (index===digits.length){
        result.push(temp.join(''));
        return;
    }
    var letters=dict[digits[index]];
    
    for (var i =0;i<letters.length;i++){
        temp.push(letters[i]);
        findCombination(digits,dict,index+1,temp,result);
        temp.pop();
    }
    return result;
}
