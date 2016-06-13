/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 // use topology sort, if there is a circle, return; else continue build the path
var canFinish = function(numCourses, prerequisites) {
    var aArr={};
    for (var i=0;i<prerequisites.length;i++){
        var t;
        if (aArr[prerequisites[i][0]]){
           t=aArr[prerequisites[i][0]];
        }else{
            t=[];
        }
         t.push(prerequisites[i][1]);
         aArr[prerequisites[i][0]]=t;
    }
    var used=[];
    for (i=0;i<numCourses;i++){
        used[i]=false;
    }
    var path=[];
    var r=true;
    for (var j=0;j<numCourses;j++){
        if (used[j]){
            continue;
        }
        visit(j);
        if (r===false){
            return false;   
        }
    }
    
    function visit(start){
        used[start]=true;
        while(aArr[start] && aArr[start].length>0){
            var t=aArr[start].shift();
            if (path.indexOf(t)===-1 && used[t]){ // here is the place to find the circle, the vertex is already visited but hasn't put into
                                                  //the path because current vertex is a prerequisite of it, while it is also a prerequisite
                                                  //of current vertex, which means there is a circle.
                r= false;
                return;
            }
            if (!used[t]){
                visit(t);
            }
        }
       
        path.push(start);
    }
    return r;
};
