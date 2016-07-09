/**
 * @param {number} n
 * @return {number}
 */
 //use pemutation

var countNumbersWithUniqueDigits = function(n) {
   var dp=[];
   
   for (var i=1;i<=n && i<=10;i++){
       dp[i]=9;
       for (var j=1;j<i;j++){
           dp[i]*=(10-j);
       }
   }
   var count=0;
   for (var l=1;l<dp.length;l++){
       count+=dp[l];
   }
   
   return count+1;
};

 //can also use backtrack and mark each visited digit
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if(n>10){
      n=10;
  }
  var visited=[];
  for (var i=0;i<=9;i++){
      visited[i]=false;
  }
  var cur=1;
  for (i=1;i<=9 && n>0;i++){
      visited[i]=true;
      cur=buildNum (cur+1,n-1,visited);
      visited[i]=false;
  }
  
  return cur;
}

function buildNum (cur,step,visited){
    if (step===0){
        return cur;
    }
    for (var i=0;i<=9;i++){
        if (!visited[i]){
            visited[i]=true;
            cur=buildNum(cur+1,step-1,visited);
            visited[i]=false;
        }
    }
    return cur;   
}
