/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
      
    var result=[];
    
    for(var i=0;i<nums1.length && nums2.length>0;){
        t=nums2.indexOf(nums1[i]);
        
        if (t===-1){
            i++;
            continue;
        }
        
        result.push(nums1[i]);
        nums1.splice(i,1);
        
        nums2.splice(t,1);
    }
    return result;
};
