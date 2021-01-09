'use strict';

const test = require('./stacks');
const Stack = test.stack;
const Queue = test.queue;


describe('Stack and Queue',()=>{
    it('Can successfully push onto a stack',()=>{
    let stack = new test();
    stack.push('test');
    expect(stack.peek()).toBeEqual('test');
    })

    it('Can successfully push multiple values onto a stack',()=>{
        let stack = new test();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBeEqual(3);
    })

    it('can successfully pop off the stack',()=>{
        let stack = new test();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBeEqual(3);
    })
    
    it('Can successfully empty a stack after multiple pops',()=>{
       const stack = new test();
       stack.push('abc');
       stack.push('cde');
       stack.push('fgh')
       stack.pop();
       stack.pop();
       stack.pop();
       expect(stack.isEmpty()).toBeTruthy(); 
    })

    it('Can successfully peek the next item on the stack',()=>{
        let stack = new test();
        stack.push(5);
        stack.push(6);
        stack.push(7);
        expect(stack.peek()).toBeEqual(7);
    })

    it('instantiate an empty stack',()=>{
        let stack = new test();
        expect(stack).toBeEqual(null);
    })

    it('Can successfully enqueue into a queue',()=>{
        let queue= new test();
        queue.enqueue(3);
        expect(queue.peek()).toEqual(3);
    })

    it('Can successfully enqueue multiple values into a queue',()=>{
        let queue= new test();
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.peek()).toEqual(5);
    })

    it('Can successfully dequeue out of a queue the expected value',()=>{
        let queue = new test();
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toBeTruthy();
    })

    it('Can successfully peek into a queue, seeing the expected value',()=>{
        let queue = new test();
        queue.enqueue(5);
        queue.enqueue(6);
        queue.enqueue(7);
        expect(queue.peek()).toEqual(7);
    })

    it('Can successfully empty a queue after multiple dequeues',()=>{
        let queue = new test();
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toBeTruthy();
    })

    it('instantiate an empty queue',()=>{
        let queue = new test();
        expect(queue.first).toBe(null);
    })

    it('empty queue raises expection',()=>{
        let queue = new test();
        expect(queue.dequeue()).toEqual('empty queue');
    })
})


