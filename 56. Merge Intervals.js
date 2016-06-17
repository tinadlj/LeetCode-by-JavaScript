/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length===0){
        return [];
    }
    
    intervals.sort(function(a,b){
        if (a.start>a.end){
            var t=a.start;
            a.start=a.end;
            a.end=t;
        }
        
        if (b.start>b.end){
            t=b.start;
            b.start=b.end;
            b.end=t;
        }
        
        if (a.start>b.start){
            return 1;
        }else if (a.start===b.start && a.end>b.end){
            return 1;
        }
        else {
            return -1;
        }
    });
    
    var result=[];
    var newInterval=new Interval();
    if(intervals[0].start<intervals[0].end){
         newInterval.start=intervals[0].start;
         newInterval.end=intervals[0].end;
    }else {
         newInterval.start=intervals[0].end;
         newInterval.end=intervals[0].start;
    }
    for (var i=1;i<intervals.length;i++){
        if (intervals[i].start>newInterval.end ){
            result.push(newInterval);
            newInterval=new Interval();
            newInterval.start=intervals[i].start;
            newInterval.end=intervals[i].end;
        }else if ( intervals[i].start>=newInterval.start ){
            newInterval.end=Math.max (intervals[i].end,newInterval.end);
        }
    }
    result.push(newInterval);
    return result;
};
