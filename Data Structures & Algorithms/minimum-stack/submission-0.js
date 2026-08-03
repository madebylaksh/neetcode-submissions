class MinStack {
    constructor() {
        this.minStack = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const min = this.minStack.at(-1);
        if (min === undefined || val <= min) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const value = this.stack.pop();
        const top = this.minStack.at(-1);
        if (top === value) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1);
    }
}
