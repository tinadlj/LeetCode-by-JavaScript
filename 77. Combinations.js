/**
/*Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/
 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var temp=[],result=[];
    cc(1,n,k,temp,result);
    return result;
    
};

function cc(start,n,k,temp,result){
    if (temp.length===k){
        result.push(temp);
        return;
    }
    if (start>n){
        return;
    }
    var i;
    
    for (i=start;i<=n;i++){
        temp.push(i);
        cc(i+1,n,k,temp.concat(),result);
        temp.pop();
    }
}
