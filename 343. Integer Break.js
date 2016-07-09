/**
 * @param {number} n
 * @return {number}
 */
 //magic factor 3 & 2 : https://discuss.leetcode.com/topic/43055/why-factor-2-or-3-the-math-behind-this-problem
var integerBreak = function(n) {
    if(n<=3){
        return n-1;
    }
    var mod=n%3;
    
    if (mod===0){
        return Math.pow(3,(n/3));
    }
    
    if (mod===1){
        return (Math.pow(3,((n/3)|0)-1) *4);
    }
    
    if(mod===2){
        return (Math.pow(3,((n/3)|0)) *2);
    }
};

//my solution with recursive also got accepted O(n ^2)

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var max=n-1;
    for (var i=2;i<=(n/2);i++){
        var t=findMax(i,n-i,i);
        if(t>max){
            max=t;
        }
    }
    return max;
};
function findMax(cur,rest,curProduct){
    if (rest===0 || cur>rest){
        return curProduct;
    }
    var max=curProduct;
    for(var i=cur;i<=rest;i++){
        var tp=findMax(i,rest-i,curProduct*i);
        if (tp>max){
            max=tp;
        }
    }
    
    return max;
}
