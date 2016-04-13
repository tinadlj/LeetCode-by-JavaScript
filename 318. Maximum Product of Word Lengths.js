/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var processedWords =[];
    var maxLength=0;
    
    for (var i=0;i<words.length;i++){
        processedWords.push(findChars(words[i]));
    }
    
    for (var i=0;i<processedWords.length;i++){
        for (var j=i+1;j<processedWords.length;j++){
            if ((processedWords[i] & processedWords[j])===0)
                maxLength= (words[i].length*words[j].length)>maxLength?words[i].length*words[j].length :maxLength;
        }
    }
    return maxLength;
};

function findChars(word){
    var wordChars=0;
    var base='a'.charCodeAt(0);
    
    for (var i=0;i<word.length;i++){
        wordChars |= (1<< (word[i].charCodeAt(0)-base));
    }
    return wordChars;
}
