/**
 * @param {number[]} height
 * @return {number}
 */
 // use stack
var trap = function(height) {
    if (height.length===0){
        return 0;
    }
    var water=0;
    var stack=[];
    stack.push(0);
    for(var i=1;i<height.length;i++){
        if (height[i]>height[i-1]){
            var bottom=height[stack.pop()]; // bottom is the previous bar
            while(stack.length>0 && height[i]>=height[stack[stack.length-1]]){
                var t=stack[stack.length-1]
                water+=(height[t]-bottom) * (i-t-1); // use left bar to calculate the extra water than previous bottom
                bottom=height[stack.pop()]; // bottom is the bar of current used left bar
            }
            if (stack.length>0){//there is still a left bar that is greater than current bar, so don't pop it, use current bar to calculate the extra water than the previous left bar
                water+=(height[i]-bottom)*(i-stack[stack.length-1]-1);
            }
        }
        stack.push(i); // next bottom 
        
    }
    return water;
};
//use two pointers
//for each point the trapped water is determined by the max left bar and max right bar, loop from left to right can find left max
//loop from right to left can find right max
var trap = function(height) {
    if (height.length===0){
        return 0;
    }
    var water=0;
    var maxL=[],maxR=[],Hmin,max=height[0];
    var len=height.length;
    for (var i=1;i<len-1;i++){
        maxL[i]=max;
        if (height[i]>max){
            max=height[i];
        }
    }
    max=height[len-1];
    for(var j=len-2;j>0;j--){
        var t=height[j];
        maxR[j]=max;
        if (t>max){
            max=t;
        }
        Hmin=Math.min(maxL[j],maxR[j]);
        if(Hmin>t){
            water+=(Hmin-t);
        }
    }
    
    
    return water;
};
