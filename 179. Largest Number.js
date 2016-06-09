/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    var result= nums.sort(
        function(a,b){
            if (b.toString()+a.toString()>a.toString()+b.toString()){
                return 1;
            }
            else {
                return -1;
            }
        }
            ).join("");
            
    if (result && result[0]=='0'){
        return '0';
    }
    else {
        return result;
    }
};
