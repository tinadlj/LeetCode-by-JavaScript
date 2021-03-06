/**
 * @param {number} n
 * @return {boolean}
 */
 //http://blog.csdn.net/ebowtang/article/details/50485622
var isPowerOfThree = function(n) {
    if (n===1)
        return true;
    if(n%2===0)
        return false;
    // use the max power of 3 integer to mod n, it should get 0.
    var maxOfIntPow3= Math.pow(3,Math.floor(Math.log(0x7fffffff)/Math.log(3)));
    return n>0&&maxOfIntPow3%n===0;
   
};

// recursive method
var isPowerOfThree = function(n) {
    return (n===1 || (n>0 && n%3===0 && isPowerOfThree(n/3)));
   
};

//iteration method
var isPowerOfThree = function(n) {
   if (n<=0)
    return false;
    
   while(n%3===0){
       n/=3;
   }
   
   return n===1;
   
};
