/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    var aArr={};
    for (var i=0;i<tickets.length;i++){
        var t;
        if(!aArr[tickets[i][0]]){
            t=[];
        }
        else{
            t=aArr[tickets[i][0]];
        }
        t.push(tickets[i][1]);
        aArr[tickets[i][0]]=t;
    }
    
    return solve('JFK',aArr);
    
};

function solve(start,ticketsArr){
    var left=[];
    var right=[];
    if (ticketsArr[start]){
       ticketsArr[start].sort();
       while(ticketsArr[start].length>0){
        var end=ticketsArr[start].shift();
        var subroutes=solve(end, ticketsArr);
        if (subroutes.indexOf(start)!==-1){
            left=left.concat(subroutes);
        }
        else{
            right=right.concat(subroutes);
        }
    }
    }
     return [start].concat(left,right);
}

// use Euler Graph
var findItinerary = function(tickets) {
    var aArr={};
    for (var i=0;i<tickets.length;i++){
        var t;
        if(!aArr[tickets[i][0]]){
            t=[];
        }
        else{
            t=aArr[tickets[i][0]];
        }
        t.push(tickets[i][1]);
        t.sort();
        aArr[tickets[i][0]]=t;
        
    }
    path=[]
    visit('JFK',aArr,path);
    return path;
};

function visit(start,ticketsArr,path){
    while(ticketsArr[start] && ticketsArr[start].length>0){
        visit(ticketsArr[start].shift(),ticketsArr,path);
    }
    path.unshift(start);
}
