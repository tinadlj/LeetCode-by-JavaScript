/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var length=citations.length;
    var start=0;
    var end=length-1;
    var mid=0;
    
    while(start<=end){
        mid=Math.floor((start+end)/2);
        if (length-mid>citations[mid]){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    
    return length-start;//length-1-start+1=length-start
};
