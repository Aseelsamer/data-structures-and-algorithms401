'use strict';
const Stack = require('../Data Structuree/stacksAndQueues/stacks');


class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        return this.stack1.push(value);
    }

    //If the dequeue method is called, push all the elements from stack 1 into stack 2, which reverses the order of the elements. Now pop from stack 2.
    dequeue() {
      if(this.stack2.length === 0 ){
          if(this.stack1.length===0){return'cannot dequeue stack is empty'}
          while(this.stack1.length>0){
              let p = this.stack1.pop();
              this.stack2.push(p);
          }
      }
      return this.stack2.pop();
}

// enqueue('a');
// enqueue('b');
// enqueue('c');
// dequeue();

module.exports = PseudoQueue;