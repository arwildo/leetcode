class MinStack {
    stack: number[];
    minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
       this.stack.push(val); 

       if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val){
            this.minStack.push(val);
       }
    }

    pop(): void {
       const popVal = this.stack.pop(); 

       if (popVal === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
       }
    }

    top(): number {
       return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
this.stack = 2, 0, 3
this.minStack = 2, 0

 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
