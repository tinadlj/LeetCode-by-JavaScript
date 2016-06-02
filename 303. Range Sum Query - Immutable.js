/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum=[];
    
    if (nums===null){
        sum=nums;
    }
    else{
        this.sum[0]=0;
        for(var i=0;i<nums.length;i++){
            this.sum[i+1]=nums[i]+this.sum[i];
        }
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
   
    return this.sum[j+1]-this.sum[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
 
