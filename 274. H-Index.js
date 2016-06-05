/**
 * @param {number[]} citations
 * @return {number}
 */
 
// sort + loop, n+logn
var hIndex = function(citations) {
    var cite;
    citations.sort((a,b)=>b-a);
    var length=citations.length;
    var i=0
    for (;i<length;i++){
        if (i+1>citations[i]){
            return i;
        }
    }
    
    return length;
};

//unsort + array + loop 
var hIndex = function(citations) {
    var dNum=[];
    var length=citations.length;
    
    for (var i=0;i<=length;i++){
        dNum[i]=0;
    }
    
    for (i=0;i<length;i++){
        if (citations[i]>=length){
            dNum[length]++;
        }
        else{
            dNum[citations[i]]++;
        }
    }
    var sum=0;
    for (var j=length;j>=0;j--){
        sum+=dNum[j];
        if (sum>=j){
            return j;
        }
    }
    
    return length;
    
};
