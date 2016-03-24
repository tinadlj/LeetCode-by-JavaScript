

var noDevideProduct =function(arr) {
     var left=[];
     var right=[];
     var r=[];
     left[0]=1;
     right[arr.length-1]=1;
     for (var i=1;i<arr.length;i++){
         left[i]=left[i-1]*arr[i-1];
}
     for (var j=arr.length-2;j>=0;j--){
         right[j]=right[j+1]*arr[j+1];
}
     for (var k=0;k<arr.length;k++){
         r[k]=left[k]*right[k];
}
     return r;
}
