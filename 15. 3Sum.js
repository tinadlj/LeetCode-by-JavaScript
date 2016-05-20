/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums=nums.sort((a,b)=>a-b);
    if (nums.length<3){
        return [];
    }
    var r=[];
    
    for (var i=0;i<nums.length;i++){
        if(i>0&&nums[i]===nums[i-1]){
            continue;
        }
        for(var j=i+1;j<nums.length;j++){
            if(j>i+1&&nums[j]===nums[j-1]){
            continue;
        }
            if((nums[i]+nums[j])>0){
                break;
            }
            for (var k=j+1;k<nums.length;k++){
                if(k>j+1&&nums[k]===nums[k-1]){
            continue;
        }
                if ((nums[i]+nums[j]+nums[k])===0){
                    r.push([nums[i],nums[j],nums[k]]);
                }
                else if ((nums[i]+nums[j]+nums[k])>0){
                    break;
                }
            }
        }
    }
    
    
    return r;
};
