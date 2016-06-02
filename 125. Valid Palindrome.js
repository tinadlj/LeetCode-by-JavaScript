/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s=s.replace(/\W/g, '').toLowerCase();
    
     if(s===null || s.length<2){
        return true;
    }
    
    
    if (s===s.split("").reverse().join("")){
        return true;
    }
    
    return false;
};
