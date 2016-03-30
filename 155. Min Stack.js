var MinStack = function() {
	this.stack=[];
	this.min=[];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
	this.stack.push(x);
    if (this.min.length===0)
        this.min.push(x);
    else
        this.min.push(this.min[this.min.length-1]>x?x:this.min[this.min.length-1]);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
	if (this.stack.length>0)
		{
		    this.stack.pop();
		    this.min.pop();
		}
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
	return this.stack[this.stack.length-1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
	return this.min[this.min.length-1];
};
