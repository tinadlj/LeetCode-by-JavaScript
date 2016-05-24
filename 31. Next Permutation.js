/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var i=nums.length-1;
    while(i>0 && nums[i]<=nums[i-1]){
        i--;
    }
    
    if (i!==0){
        if (i===nums.length-1){
            swap(nums,i,i-1);
        }
        else{
            
            var j=nums.length-1;
            while(j>i){
                if (nums[j]>nums[i-1]){
                    break;
                }
                j--;
            }
            
            swap(nums,j,i-1);
            
            var end=nums.length-1;
            while(i<end){  // if i===0, can also use this part instead of the sort function part
                swap(nums,i,end);
                i++;
                end--;
            }
        }
    }
    else{
        nums.sort((a,b)=>a-b);
    }
};
function swap(nums,i,j){
    var t=nums[i];
    nums[i]=nums[j];
    nums[j]=t;
    
}
