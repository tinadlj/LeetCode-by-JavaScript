/**
 * Performs a binary search on the host array. This method can either be
 * injected into Array.prototype or called with a specified scope like this:
 * binaryIndexOf.call(someArray, searchElement);
 *
 * @param {*} searchElement The item to search for within the array.
 * @return {Number} The index of the element which defaults to -1 when not found.
 */
function binaryIndexOf(searchElement) {
    'use strict';
 
    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;
 
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0; // get integer
        currentElement = this[currentIndex];
 
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
 
    return -1; //not find
}
//recursive version binary search
function binarySearch(narray, target){
	narray=narray.sort((a,b)=>a-b);
	var midpos= Math.floor(narray.length/2);

	if (narray[midpos]===target){
		return midpos;
	}

	if(narray[midpos]>target){
		binarySearch(narray.slice(0,midpos),target);
	}
	else{
		binarySearch(narray.slice(midpos+1),target);
	}
    return -1;
}
