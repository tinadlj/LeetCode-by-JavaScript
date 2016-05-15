
//key words: associate array, sort
var topKFrequent = function(nums, k) {
    var r={};
    for (var i=0;i<nums.length;i++){
        if (r[nums[i]]===undefined]){
            r[nums[i]]=1;
        }
        else{
            r[nums[i]]++;
        }
    }
    
    var rr=[];
    for (var key in r){
        rr.push([parseInt(key),r[key]]);
    }
    
    rr.sort((a,b)=>b[1]-a[1]);
    
    rr= rr.slice(0,k).map((cur)=>cur[0]);
    
    return rr;
};
