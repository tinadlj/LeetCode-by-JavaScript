/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
 //find the greatest common divisor, if z can divide the gcd, then it is true;
 /*
 假设最终体积z = m * x + n * y（m与n为整数，可以为0或者为负）

令x = p * gcd, y = q * gcd，可知p与q互质。

则z = (m * p + n * q) * gcd

可以证明一定存在m, n，使得m * p + n * q = 1（p与q互质的性质，参见：裴蜀定理）

由此可知z一定是gcd的整数倍
*/
var canMeasureWater = function(x, y, z) {
    if (z===0){
        return true;
    }
    
    var gcd=GCD(Math.min(x,y),Math.max(x,y));
    
    return z%gcd===0 && z<=x+y;
    
};
function GCD(a,b){
    if (a===0){
        return b;
    }
    return GCD(b%a,a);
}
