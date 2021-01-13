'use strict';
const Stack = require('../Data Structuree/stacksAndQueues/stacks');


class PseudoQueue {
    constructor() {
        this.stack1 = new Stack;
        this.stack2 = new Stack;
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack1 === 0) {
            return ' this is empty';
        } else {
           this.stack2.push(this.stack1.pop())
        }

        let returnValue = this.stack2.pop();
        if(this.stack2 === 0){
            return 'empty';
        }else {
            this.stack1.push(this.stack2.pop);
        }
        return returnValue;
    }

}

module.exports = PseudoQueue;