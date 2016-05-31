/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var dic='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result='';
    
    while(n>0){
           var t=(n-1)/26 | 0;
           var tt= (n-1)%26;
           
           result =dic[tt] + result;
           if (t===0){
               return result;
           }
           
           if (t>26){
               n=(n-1)/26 | 0;
           }else {
               result = dic[t-1] +result;
               return result;
           }
    }
};
