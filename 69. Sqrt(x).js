/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var low=0;
    var high=x;
    var mid=x/2 | 0;
    
    while(low<=high){
        if (mid*mid>x){
            high=mid-1;
        }else{
            low=mid+1;
        }
        mid= (low + high)/2 | 0; // mid =Math.min(low,high)
    }
    
    return mid;
};
