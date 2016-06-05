//Dynamic programming and binary search

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var maxLen=0;
    var dLen=[];
    dLen[0]=1;
    
    
    for (var i=0;i<nums.length;i++){
        var t=nums[i];
        dLen[i]=1;
       for (var j=0;j<i;j++){
           if (nums[j]<t){ // if current is greater than the previous one, then the temp maxLen of current element is 1+ the previous one, 
                          //then loop through all the previous elements, and find the maxLen of current element
                          //状态转移方程 dp[x] = max(dp[x], dp[y] + 1) 其中 y < x 并且 nums[x] > nums[y]
               dLen[i]=Math.max(dLen[i], dLen[j]+1);
           }
       }
       maxLen>=dLen[i]?maxLen:maxLen=dLen[i];
    }
    
    return maxLen;
};


//binary search
var lengthOfLIS = function(nums) {
    if (nums.length===0){
        return 0;
    }
    
    var arr=[];
    arr[0]=nums[0];
    
    for (var i=1;i<nums.length;i++){
       var t=nums[i];
        var mid=0;
        var start=0; // start will be the position in the sequence arrary of current element
        var end=arr.length-1;
       while(end>=start){
           mid=Math.floor((end+start)/2);
           if(arr[mid]>=t){
               end--;
           }
           else{
               start++;
           }
       }
       if(start>=arr.length){
           arr.push(t);
       }else{
           arr[start]=t;
       }
    }
    
    return arr.length;
};
