/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var a=0; b=0;
    secret=secret.split('');
    guess=guess.split('');
    for (var i=0;i<secret.length;i++){
        if (secret[i]==guess[i]){
            a++;
        }
    }
    secret.sort(function (a,b) {return a-b});
    guess.sort(function (a,b) {return a-b});
    
    var i=0,j=0;
    while(i<secret.length && j<guess.length){
        if (secret[i]==guess[j]){
            b++;
            j++;
            i++;
        }
        else if (secret[i]>guess[j]){
            j++;
        }
        else i++;
    }
    
    return a+"A"+(b-a)+"B"
};
