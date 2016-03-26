/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort(function (a,b){ return a-b;});
	
	var r=nums.length-1;
	var l=0;
	var i=Math.floor((r+l)/2);
	if (nums[r]==r)
	    return r+1;
	    
	if(nums[0]!=0)
	    return 0;
	
	while (i>l && i<r){
		if (nums[i]!=i)
			{
				r=i;
				i=Math.floor((r+l)/2);
			}
		else
			{
				l=i;
				i=Math.floor((r+l)/2);
			}
	}
        return r;
};
