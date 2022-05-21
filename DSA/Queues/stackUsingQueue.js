class StackUsingQueue {
	constructor(){
		this.q1 = [];
		this.q2 = [];
	}

	push(x) {
		this.q1.push(x);
	}
	
	pop() {
		while(this.q1.length > 1) {
			this.q2.push(this.q1.shift());
		}
		const rv = this.q1.shift();
		
		// rv = 30
		// q1= []
		// q2 = [10, 20]
		while(this.q2.length > 0) {
			this.q1.push(this.q2.shift());
		}
		// q1 = [10,20]
		// q2 = []
		return rv;
	}
}

q1 = [30]
q2 = [10, 20]
let stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.pop());