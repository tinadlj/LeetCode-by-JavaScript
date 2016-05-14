
function Permute(arr){
var result=[]; //global stack to store the final result
var usedChar=[]; //global stack to store the temp char
return pl(arr);
function pl(arr){
	var i, ch;
	for (i=0;i<arr.length;i++){
		ch=arr.splice(i,1)[0];	//extract one char each time 
		usedChar.push(ch);	// push in to the temp stack to waiting for compute a new combination

		if (arr.length===0){
			result.push(usedChar.slice());  // the bottom of the recusive call chain, one element can only have on pemutation
		}
		pl(arr);	// pemute the spliced array, which length is arr-1
		arr.splice(i,0,ch); //then restore the array
		usedChar.pop();	//pop up the used element, so it can start the next element
	}
	return result;	//return the final result
}}
