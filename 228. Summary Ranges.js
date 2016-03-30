/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
	var r=[];
	var s,e;
    for(var i=0;i<nums.length;i++){
        if (i==0){
            s=nums[0];
            e=nums[0];
        }
		else if(nums[i]-1!=e){
			if (s===e)
	            r.push(e.toString());
	        else 
		        r.push(s +"->"+e);
			s=nums[i];
			}
		e=nums[i];

		if (i===nums.length-1){
		    if (s===e)
	            r.push(e.toString());
	        else 
		        r.push(s +"->"+e);
		}
	}

	
	return r;
};
