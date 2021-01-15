'use strict';

const Stack = require('../Data Structuree/stacksAndQueues/stacks');
const PseudoQueue = require('../queuewithstacks/queue-with-stacks');

describe('PsuedoQueue Class',()=>{
    it('should successfully enqueue to an empty queue', () => {
        const queue = new PseudoQueue();
        queue.enqueue(123);
        expect(queue.stack1.top.value).toBe(123);
      });

      it('should instantiate an empty PseudoQueue', () => {
        const queue = new PseudoQueue();
        expect(queue).toBeDefined();
      });
    
      it('should successfully dequeue from the front of the queue', () => {
        const queue = new PseudoQueue();
        queue.enqueue(123);
        let returnValue = queue.dequeue();
        expect(returnValue).toStrictEqual(123);
      });
    
})