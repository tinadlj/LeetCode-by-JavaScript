/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result='';
    
    var dict = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    
    for (var i=0;i<val.length;i++){
        var v=val[i];
        
        if (num>=v){
            var count= num/v | 0;
            num=num%v;
            
            for (var j=0;j<count;j++){
                result+=dict[i];
            }
        }
    }
    
    return result;
};
