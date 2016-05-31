/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    var result=[];
    
    var i=0,j=0;
    
    for (;i<nums1.length && j< nums2.length;){
        if (nums1[i]>nums2[j]){
            j++;
        }else if (nums1[i]<nums2[j]){
            i++;
        }else {
            if (result.length===0 || nums1[i]>result[result.length-1]){
                result.push(nums1[i]);
            }
            i++;
            j++;
        }
        
    }
    return result;
};
