/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Merge Sort
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var r=[];
    while (nums1.length && nums2.length){
        if (nums1[0]<nums2[0]){
            r.push(nums1.shift());
        }
        else 
        {
            r.push(nums2.shift());
        }
    }
    while (nums1.length)
    {
        r.push(nums1.shift());
    }
    while (nums2.length)
    {
        r.push(nums2.shift());
    }
    
    
    if (r.length%2!=0)
        return r[Math.floor((r.length-1)/2)];
    else 
        return (r[r.length/2]+r[(r.length/2) -1])/2
};
