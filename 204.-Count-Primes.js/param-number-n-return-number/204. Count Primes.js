/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n<=2)
		return 0;
	var prime =[];
	prime[0]=2;
	var i=3;
	var isqr;
	var ns=Math.floor(Math.sqrt(n));
	while (i<n){
		isqr=Math.floor(Math.sqrt(i))
		for (var j=0;j<prime.length;j++){
			if (i%prime[j]===0 && prime[j]<=isqr )
				break;
			else if(prime[j]>isqr)
				{
				    prime.push(i);
				    break;
				}
		}
		i++;
	}
	return prime.length;
};
