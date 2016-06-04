// Two pointer for sorted array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var result=[];
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    var p1=0;
    var p2=0;
    
    while(p1<nums1.length && p2<nums2.length){
        if (nums1[p1]===nums2[p2]){
            result.push(nums1[p1]);
            p1++;
            p2++;
        }else if (nums1[p1]>nums2[p2]){
            p2++;
        }else{
            p1++;
        }
    }
    
    return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
      
   var result=[];
    
    for(var i=0;i<nums1.length && nums2.length>0;i++){
        t=nums2.indexOf(nums1[i]);
        
        if (t!=-1){
            result.push(nums1[i]);
            nums2.splice(t,1);
        }
    }
    return result;
};

/*
current complexity is O(m*n)

What if the given array is already sorted? How would you optimize your algorithm?
use two pointer
complexity is O(mlogm + nlogn)

What if nums1's size is small compared to num2's size? Which algorithm is better?
find the smaller one, then sort, then search
complexity is O((m+n)logm, (m+n)logn)

Best way is to use HASH Table, complexity is O(m+n)

What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


*/

//Hash table
var intersect = function(nums1, nums2) {
    var arr={};
    var result=[];
    
    if (nums1.length<nums2.length){
    
    for(var i=0;i<nums1.length;i++){
      arr[nums1[i]]= arr[nums1[i]]+1 ||1;
    }
    
    for(var j=0;j<nums2.length;j++){
        if (arr[nums2[j]]>0){
            result.push(nums2[j]);
            arr[nums2[j]]--;
        }
    }
    }else {
    
    for(var i=0;i<nums2.length;i++){
      arr[nums2[i]]= arr[nums2[i]]+1 ||1;
    }
    
    for(var j=0;j<nums1.length;j++){
        if (arr[nums1[j]]>0){
            result.push(nums1[j]);
            arr[nums1[j]]--;
        }
    }
    }
    return result;
};
