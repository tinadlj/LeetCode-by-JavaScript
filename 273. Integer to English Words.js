/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    
    var lv1=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen", "Seventeen","Eighteen","Nineteen"];
    var lv2=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
    var lv3=["Hundred"]
    var lv4=["Thousand","Million","Billion"];
    
    var result=[];
    var sec=-1;
    while(num>0){
        var t=num%1000;
        if (t===0){
            sec++;
            num=num/1000 | 0;
            continue;
        }
        
        if (lv4[sec]){
            result.unshift(lv4[sec]);
        }
        
        if ((t%100)>=20){
            if (t%10 !==0){
                result.unshift(lv1[((t%10) |0)]);
            }
            result.unshift(lv2[(((t%100)/10) | 0)-2]);
        }else if ((t%100)!==0){
            result.unshift(lv1[((t%100) | 0)]);
        }
        
        if (t>=100){
            result.unshift(lv1[(t/100 | 0)]+" "+ lv3[0]);
        }
        
        sec++;
        num=num/1000 | 0;
    }
    return result.join(" ") || "Zero";
};
