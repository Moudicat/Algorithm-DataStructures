class Node {
	constructor(val) {
		this.val = val;
		this.prev = this.next = null;
	}
}

class Chain {
	constructor(...args) {
		this.HEAD = this.TAIL = this.POINTER = null;
		this.length = 0;

		if (args.length > 1) {
      args.forEach(this.push.bind(this));
    } else if (args.length === 1 && args[0] instanceof Array) {
      args[0].forEach(this.push.bind(this));
    } else if (args.length === 1) {
    	this.push(args[0]);
    }
	}

	push(val) {
		let newNode = new Node(val);

		if (this.HEAD === null) {
			this.HEAD = this.TAIL = this.POINTER = newNode;
		} else {
			[this.TAIL.next, newNode.prev, this.TAIL] = [newNode, this.TAIL, newNode];
		}

		return ++this.length;
	}

	pop() {
		if (this.length === 0) return false;

		let lastVal = this.TAIL.val;

		if (this.HEAD === this.TAIL) {
			this.HEAD = this.TAIL = this.POINTER = null;
		} else {

			if (this.TAIL === this.POINTER) {
				this.POINTER = this.TAIL.prev;
			}

			[this.TAIL, this.TAIL.next] = [this.TAIL.prev, null];

		}

		--this.length;

		return lastVal;
	}

	unshift(val) {
		let newNode = new Node(val);

		if (this.HEAD === null) {
			this.HEAD = this.TAIL = this.POINTER = newNode;
		} else {
			[newNode.next, this.HEAD.prev, this.HEAD] = [this.HEAD, newNode, newNode];
		}

		return ++this.length;
	}

	shift() {
		if (this.length === 0) return false;

		let firstVal = this.HEAD.val;

		if (this.HEAD === this.TAIL) {
			this.HEAD = this.TAIL = this.POINTER = null;
		} else {

			if (this.HEAD === this.POINTER) {
				this.POINTER = this.HEAD.next;
			}

			[this.HEAD, this.HEAD.prev] = [this.HEAD.next, null];
		}

		--this.length;

		return firstVal;
	}

	get(index = 0) {
		if (index < 0 || index >= this.length) return false;

		this.POINTER = this.HEAD;

		while(index-- > 0) {
			this.POINTER = this.POINTER.next;
		}

		return this.POINTER.val;
	}

	remove(index) {
		if (index === undefined || index < 0 || index >= this.length) return false;

		let removeVal = this.get(index);

		if (this.POINTER === this.HEAD) {
			return this.shift();
		} else if (this.POINTER === this.TAIL) {
			return this.pop();
		} else {
			[this.POINTER.prev.next, this.POINTER.next.prev, this.POINTER] = [this.POINTER.next, this.POINTER.prev, this.POINTER.next];
			--this.length;
			return removeVal;
		}
	}

	next() {
		if (this.length === 0) return false;
		if (this.POINTER === null) {
			this.POINTER = this.TAIL;
			throw new Error('Out of range');
		}

		let currVal = this.POINTER.val;

		this.POINTER = this.POINTER.next;

		return currVal;
	}

	prev() {
		if (this.length === 0) return false;
		if (this.POINTER === null) {
			this.POINTER = this.HEAD;
			throw new Error('Out of range');
		}

		let currVal = this.POINTER.val;

		this.POINTER = this.POINTER.prev;

		return currVal;
	}

	frist() {
		if (this.length === 0) return false;
		return this.HEAD.val;
	}

	last() {
		if (this.length === 0) return false;
		return this.TAIL.val;
	}


	[Symbol.iterator]() {
		const that = this;
		this.POINTER = this.HEAD;

		return {
			next() {
				let val = that.next();
				return val ? { value: val, done: false } : {value: undefined, done: true};
			}
		}
	}
}

export default Chain;