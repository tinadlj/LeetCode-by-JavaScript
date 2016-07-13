/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var dict={};
    dict["1"]="1";
    dict["6"]='9';
    dict['8']='8';
    dict['9']='6';
    dict["0"]='0';
    
    var left=0;
    var right=num.length-1;
    
    while(left<right){
        if (dict[num[left]]!==num[right]){
            return false;
        }
        left++;
        right--;
    }
    
    if (left===right ){
        if (dict[num[left]]===num[left]){
            return true;
        }
        else{
            return false;
        }
    }
    
    return true;
    
};
