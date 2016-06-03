/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function(keyVal) {
    return {
    key:keyVal,
    isWord:false,
    children:{}
    }
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var tree=this.root;
    
    for (var i=0;i<word.length;i++){
        var t=word[i];
        if (!tree.children[t]){
            tree.children[t]=new TrieNode(t);
        }
        tree=tree.children[t];
    }
    tree.isWord=true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var tree=this.root;
    
    for (var i=0;i<word.length;i++){
        var t=word[i];
        if (!tree.children[t]){
            return false;
        }
        tree=tree.children[t];
    }
    return tree.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
     var tree=this.root;
    
    for (var i=0;i<prefix.length;i++){
        var t=prefix[i];
        if (!tree.children[t]){
            return false;
        }
        tree=tree.children[t];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */
