/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var p=0;
	var al=a.length;
	var bl=b.length;
	var r=[];
	for (var i=al-1,j=bl-1; i >=0 || j>=0; i--,j--){
        var ta= (i<0)?0:parseInt(a[i]);
        var tb= (j<0)?0:parseInt(b[j]);
        
        r.unshift((ta+tb+p)%2);
        p=Math.floor((ta+tb+p)/2);

	}
	if(p==1)
	    r.unshift(1);
	return r.join("");
	
};
