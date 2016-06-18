/**
 * @param {number} num
 * @return {boolean}
 */
 /*
 若一个整数是4的幂，则其二进制形式具有如下特点：

1. 最高位为1，其余位为0

2. 0的个数为偶数

条件1可以用num & (num - 1) == 0判断

条件2可以用num & 0x55555555 > 0判断*/

var isPowerOfFour = function(num) {
   return (num>0) &&  ((num & (num-1))===0 ) && ((num & 0x55555555) >0);
};
