/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var r=[];
    if (n<=0){
        return r;
    }
   
   generator(r,'',n,n);
   
   return r;
};

function generator(r,s,leftnum,rightnum){
    if(leftnum===0 && rightnum===0){
        r.push(s);
    }
    
    if (rightnum<leftnum || leftnum<0 || rightnum<0){
        return;
    }
    
    generator(r,s+'(',leftnum-1,rightnum);
    generator(r,s+')',leftnum,rightnum-1);
    
}
