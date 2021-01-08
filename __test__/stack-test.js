'use strict';

const test = require('../Data Structuree/stacksAndQueues/stacks-and-queues');
const Stack = model.stack;
const Queue = model.queue;


describe('Stack and Queue',()=>{
    it('Can successfully push onto a stack',()=>{
    let stack = new Stack();
    stack.push(3);
    expect(stack.peek()).toEqual(3);
    })

    it('Can successfully push multiple values onto a stack',()=>{
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toEqual(3);
    })

    it('can successfully pop off the stack',()=>{
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
    })
    
    it('Can successfully empty a stack after multiple pops',()=>{
       const stack = new Stack();
       stack.push('abc');
       stack.push('cde');
       stack.push('fgh')
       stack.pop();
       stack.pop();
       stack.pop();
       expect(stack.isEmpty()).toBeTruthy(); 
    })

    it('Can successfully peek the next item on the stack',()=>{
        let stack = new Stack();
        stack.push(5);
        stack.push(6);
        stack.push(7);
        expect(stack.pop()).toEqual(7);
    })

    it('instantiate an empty stack',()=>{
        let stack = new Stack();
        expect(stack).toEqual(null);
    })

    'use strict';

const supergoose = require('@code-fellows/supergoose');
const cat = require('../lib/models/categories/category-collection');

describe('Category Model',()=>{
    it('it can get()',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
        return cat.read()
        .then(data=>{
            Object.keys(obj).forEach(key=>{
                expect(data[0][key].toEqual(obj[key]))
            })
        })
    })

    it('it can post()',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
        return cat.create(obj)
        .then(data=>{
            id=data._id;
            Object.keys(obj).forEach(key=>{
                expect(record[key]).toEqual(obj[key])
            })
        })
    })

    it('it can get(id)',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
        let id = req.params;
        return cat.read(id)
        .then(data=>{
            Object.keys(obj).forEach(key=>{
                expect(data[0][key].toEqual(obj[key]))
            })
    })

    })

    it('it can update(id)',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
    let id = req.params;
    return cat.update(id)
    .then(data=>{
        Object.keys(obj).forEach(key=>{
            expect(data[0][key].toEqual(obj[key]))
        })
})
    })


   
    it('it can delete(id)',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
    let id = req.params;
    return cat.update(id)
    .then(data=>{
        Object.keys(obj).forEach(key=>{
            expect(data[0][key].toEqual(obj[key]))
        })
})

})


})


})