/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
  candidates.sort((a,b)=>a-b);
  var temp=[];
  var result=[];
  
  generateSum(temp,0,result,target,candidates);
  
  return result;
};

function generateSum (temp,index,result,target,candidates){
    if (target===0){
        result.push(temp.slice());
        return result;
    }
    
    if (index===candidates.length){
        return result;
    }

    for (var i=index;i<candidates.length;i++){
        if (candidates[i]<=target){
            temp.push(candidates[i]);
            generateSum (temp,i+1,result,target-candidates[i],candidates);
            temp.pop();
        }else {
            return result;
        }
        
        while(candidates[i+1]===candidates[i]){
            i++;
        }
    }
    
    return result;
}
