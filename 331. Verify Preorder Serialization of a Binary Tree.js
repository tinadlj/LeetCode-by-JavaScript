/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    
    var diff=1;
    preorder=preorder.split(',');
    for (var i=0;i<preorder.length;i++){
        diff--;
        if (diff<0){
            return false;
        }
        
        if (preorder[i]!=='#'){
            diff+=2;
        }
        
    }
   
    return diff===0;
    
};
