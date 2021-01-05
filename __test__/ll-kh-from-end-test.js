'use strict';

const ll-kth-from-end = require('../Data Structuree/ll-kth-from-end/linkedlist');

describe('Where k is greater than the length of the linked list',()=>{
    it('kthFromEnd(k)',()=>{
        let LL = new LLFromEnd();
        LL.insert('1');
        expect(LL.kthFromEnd(1)).toEqual('longer than the LL ');
    });

    it('Where k is not a positive integer',()=>{
        let LL = new LLFromEnd();
        LL.insert(-1);
        expect(LL.kthFromEnd(-1)).toEqual('not valid');
    });

    it('Where the linked list is of a size 1',()=>{
        let LL = new LLFromEnd();
        LL.insert(1);
        expect(LL.kthFromEnd(1)).toEqual(1);
    });

    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
      
    });

    
    it('Where k and the length of the list are the same',()=>{
        let LL = new LLFromEnd();
        LL.insert(3);
        expect(LL.kthFromEnd(3)).toEqual(3);
    });

    
})