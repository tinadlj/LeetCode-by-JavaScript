var maxProfit = function(prices) {
    if (prices.length<2){
        return 0;
    }
    
    var min=prices[0],max=prices[0],profit=0;
    for (var i=1;i<prices.length;i++){
        if (prices[i]<prices[i-1]){
            profit+=(max-min);
            min=prices[i];
            max=prices[i];
        }
        else{
            max=prices[i];
        }
        
    }
    profit+=(max-min);
    return profit;
    
};

var maxProfit = function(prices) {
    if(prices === null || prices.length === 0){
        return 0;
    }
    
    var profit = 0;

    for(var i = 1; i < prices.length; i++){
        var diff = prices[i] - prices[i-1];
        if(diff > 0){
            profit += diff;
        }
    }
    
    return profit;
};
