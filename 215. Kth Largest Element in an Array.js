/*
QuickSelect(A, k)
  let r be chosen uniformly at random in the range 1 to length(A)
  let pivot = A[r]
  let A1, A2 be new arrays
  # split into a pile A1 of small elements and A2 of big elements
  for i = 1 to n
    if A[i] < pivot then
      append A[i] to A1
    else if A[i] > pivot then
      append A[i] to A2
    else
      # do nothing
  end for
  if k <= length(A1):
    # it's in the pile of small elements
    return QuickSelect(A1, k)
  else if k > length(A) - length(A2)
    # it's in the pile of big elements
    return QuickSelect(A2, k - (length(A) - length(A2))
  else
    # it's equal to the pivot
    return pivot
    */
    
    /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // including duplicate senario
var findKthLargest = function(nums, k) {
    var pivot=nums[Math.floor(Math.random() * nums.length)];
    var big=[];
    var small=[];
    for (var i=0;i<nums.length;i++){
        if(nums[i]>pivot){
            big.push(nums[i]);
        }else if (nums[i]<pivot){
            small.push(nums[i]);
        }
    }
    if (big.length>=k){
        return findKthLargest(big,k);
    }
    
    if (small.length>nums.length-k){
        return findKthLargest(small,small.length-nums.length+k);
    }
    return pivot; 
};
