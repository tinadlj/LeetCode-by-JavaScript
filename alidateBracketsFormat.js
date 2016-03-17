var validateBracketsFormat=function (a){
    if (a.length<=1)
        return false;
    var rel=[];
    for (var i=0;i<a.length;i++){
    if (a.charAt(i)=='[' ||a.charAt(i)=='{'||a.charAt(i)=='(')
        rel.push(a[i]);
    else 
        {
        if (a[i]==']'){
            if (rel.indexOf('[')!=-1)
                rel.splice(rel.indexOf('['),1);
            else 
                return false;}
        else if (a[i]=='}'){
            if (rel.indexOf('{')!=-1)
                rel.splice(rel.indexOf('{'),1);
            else 
                return false;}
        else if (a[i]==')'){
            if (rel.indexOf('(')!=-1)
                rel.splice(rel.indexOf('('),1);
            else 
                return false;}
    }
   }
   if (rel.length===0)
       return true;
}
