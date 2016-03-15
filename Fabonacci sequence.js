//Fabonacci sequence 
var fabonacci = function (a, b) {
    if(a==0 && b==0) {
        if (i==1) {
             return 1;}
        else { 
             i--; 
             return fabonacci(0,1);
             }
    }
    else if (i==1) {
         return a+b;
         }
    else if (i>1) {
       i--;
       return fabonacci(b,a+b);
       }
}
}
//Or use for loop to easily implement it since the array size is extendible
var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    alert(fib[i]);
}
