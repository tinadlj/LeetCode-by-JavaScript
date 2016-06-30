/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //bit manipulation
 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
    var a=0,b=0;
    var xor=nums.reduce((a,b)=>a^b);
    var lowbit=xor&(-xor);
    for (var i=0;i<nums.length;i++){
        if (nums[i]&lowbit){
            a^=nums[i];
        }else {
            b^=nums[i];
        }
    }
    
    
    return [a,b];
};
 //hash table/stack
var singleNumber = function(nums) {
    var r=[];
    for(var i=0;i<nums.length;i++){
        if(r.indexOf(nums[i])!=-1){
            r.splice(r.indexOf(nums[i]),1);
        }
        else
            r.push(nums[i]);
    }
    return r;
};
