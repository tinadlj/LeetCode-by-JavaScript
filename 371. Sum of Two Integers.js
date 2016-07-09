/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 // 每次把进位和不进位的两个数异或，直到再也没有进位为止
var getSum = function(a, b) {
    while(b!==0){
        var carry=a&b; // carry is 进位
        a=a^b;
        b=carry<<1;
    }
    
    return a;
};
