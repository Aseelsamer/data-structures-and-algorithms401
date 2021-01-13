'use strict';
const Stack = require('../Data Structuree/stacksAndQueues/stacks');


class PseudoQueue {
    constructor() {
        this.stack1 = new Stack;
        this.stack2 = new Stack;
    }

    enqueue(value) {
        this.stack1.push(value);
        this.stack2.push(value);
    }

    dequeue() {
        if (this.stack1 === 0) {
            return ' this is empty';
        } else if (this.stack1 !== 0) {
            let new = this.stack1.top();
            this.stack1.pop();
            return new;
        }
    }

}

module.exports = PseudoQueue;