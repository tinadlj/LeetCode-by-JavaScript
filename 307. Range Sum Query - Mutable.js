//Segment tree




//Binary Indexed tree
//Be aware that index is start from 1 in the tree
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.oriArr=nums;
    this.tree=[];
    this.MaxIndex=nums.length;
    this.tree[0]=0;
    for (var i=0;i<this.MaxIndex;i++){
       this.add(i+1,nums[i]);
    }
};

NumArray.prototype.add=function(i,val){
    while(i<=this.MaxIndex){
        this.tree[i]=this.tree[i] || 0;
        this.tree[i]+=val;
        i+= (i&-i);
    }
}

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    if (i<0 || i>this.MaxIndex){
        retrun;
    }
    var dif=val-this.oriArr[i];
    this.oriArr[i]=val;
    this.add(i+1,dif);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i<0 || i>this.MaxIndex){
        retrun;
    }
    
    return this.sum(j+1)-this.sum(i);
};

NumArray.prototype.sum=function(i){
    var sum=0;
    while(i>0){
        sum+=this.tree[i];
        i-=(i&-i);
    }
    
    return sum;
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */
