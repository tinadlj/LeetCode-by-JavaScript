/**
 * @constructor
 */
var TrieNode=function (keyVal){
    return {
        key:keyVal,
        isWord:false,
        children:{}
    }
}  
 
 
var WordDictionary = function() {
    this.root=TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    var tree=this.root;
    
    for (var i=0;i<word.length;i++){
        var t=word[i];
        
        if (!tree.children[t]){
            tree.children[t]=TrieNode(t);
        }
        tree=tree.children[t];
    }
    tree.isWord=true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    return searchWord(this.root,word,0);
};

searchWord= function(node,word,index){
    if(index===word.length){
        return node.isWord;
    }
        var t=word[index];
        
        if (t==='.'){   
            for (var k in node.children){
                if (searchWord(node.children[k],word,index+1)){
                    return true;
                }
            }
            return false;
        }else{
            if(node.children[t]){
                return searchWord(node.children[t],word,index+1);
            }
        }
    
    
    return false;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */

//another method
/**
 * @constructor
 */
var TrieNode=function (keyVal){
    return {
        key:keyVal,
        isWord:false,
        children:{}
    }
}  
 
 
var WordDictionary = function() {
    this.root=TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    var tree=this.root;
    
    for (var i=0;i<word.length;i++){
        var t=word[i];
        
        if (!tree.children[t]){
            tree.children[t]=TrieNode(t);
        }
        tree=tree.children[t];
    }
    tree.isWord=true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    return searchWord(this.root,word,0);
};

searchWord= function(node,word,index){
    if(index===word.length){
        return node.isWord;
    }
    
    for (;index<word.length;index++){
        var t=word[index];
        
        if (t==='.'){   
            for (var k in node.children){
                if (k && searchWord(node.children[k],word,index+1)){
                    return true;
                }
            }
            return false;
        }else{
            if(!node.children[t]){
                return false;
            }
            node=node.children[t];
        }
        
    }
    
    return node.isWord;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
