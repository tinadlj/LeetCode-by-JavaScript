/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    var ht={};

    for (var i=0;i<strings.length;i++){
        var t=strings[i];
        if (t.length===1){
            ht[-1]=ht[-1]||[];
            ht[-1].push(t);
        }else {
            var key=[];
            for (var j=1;j<t.length;j++){
                var tt=t.charCodeAt(j)-t.charCodeAt(j-1);
                if(tt<0){
                    tt+=26;
                }
                key.push(tt);
            }
            if (key.length>0){
                if(ht[key]){
                    ht[key].push(t);
                }
                else{
                    ht[key]=[];
                    ht[key].push(t);
                }
            }
        }
        
    }
    
    var result=[];
    
    for (var k in ht){
        result.push(ht[k]);
    }
    return result;
};
