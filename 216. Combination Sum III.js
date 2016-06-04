/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var t=[];
    var result=[];
    
    if (k<1 || k>9 || k>n){
        return result;
    }
   
    combinationSub2(t,n,result,k,1);
            
    return result;
};
function combinationSub2(t,n,result,k,j){
    if (k<1 || n<1){
        return;
    }
    for (var i=j;i<=9;i++){
        if (i===n && k===1){
            t.push(i);
            result.push(t.slice());
            t.pop();
            return result;
        }else if (i<n && k>1){
            t.push(i);
            combinationSub2(t,n-i,result,k-1,i+1);
            t.pop();
        }
        
    }
}
