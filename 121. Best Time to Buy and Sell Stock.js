/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min=prices[0],max=prices[0],dif=0;
    for (var i=1;i<prices.length;i++){
        if(prices[i]>=min){
            if (prices[i]>max){
                max=prices[i];
            }
        }
        else{
            (max-min)>dif?dif=max-min:dif;
            min=prices[i];
            max=prices[i];
        }
    }
    (max-min)>dif?dif=max-min:dif;
    return dif;
    
};
