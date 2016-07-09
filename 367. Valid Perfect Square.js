/**
 * @param {number} num
 * @return {boolean}
 */
 //binary search
var isPerfectSquare = function(num) {
    if (num===0){
        return false;
    }
    if (num===1){
        return true;
    }
    var left=0;
    var right=num;
    var mid;
    
    while(left<right){
        mid=(left+right)/2 |0;
        if (mid*mid===num){
            return true;
        }
        
        if (mid*mid>num){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return left*left===num;
    
};
