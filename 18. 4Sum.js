/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums=nums.sort((a,b)=>a-b);
    if (nums.length<4){
        return [];
    }
    var r=[];
    
    for (var i=0;i<nums.length;i++){
        if(i>0&&nums[i]===nums[i-1]){
            continue;
        }
        if(target>0&&nums[i]>target){
            break;
        }
        for(var j=i+1;j<nums.length-2;j++){
            if(j>i+1&&nums[j]===nums[j-1]){
            continue;
            }
            if(target>0&&(nums[i]+nums[j])>target){
                break;
            }
            
            var t=target-(nums[i]+nums[j]);
            var left=j+1;
            var right=nums.length-1;
            
            while(left<right){
                if((nums[left]+nums[right])===t){
                    r.push([nums[i],nums[j],nums[left],nums[right]]);
                    while(left<right&&nums[right]===nums[--right]);
                    while(left<right&&nums[left]===nums[++left]);
                }
                else if ((nums[left]+nums[right])>t){
                    while(left<right&&nums[right]===nums[--right]);
                }
                else{
                    while(left<right&&nums[left]===nums[++left]);
                }
            }
        }
    }
    
    
    return r;
};
