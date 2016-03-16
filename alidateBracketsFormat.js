var validateBracketsFormat=function (a){
    if (a.length<=1)
        return false;
    var rel=[];
    for (var i=0;i<a.length;i++){
    if (a.charAt(i)=='[' ||a.charAt(i)=='{'||a.charAt(i)=='(')
        rel.push(a[i]);
    else 
        {
        if (rel.indexOf(a[i]))
            rel.splice(rel.indexOf(a[i]),1);
        else 
            return false;
    }
   }
   return true;
}
