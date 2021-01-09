'use strict';

const linkedList = require ('../Data Structuree/linked-list/linked-list');

describe('LinkedList Module',()=>{
    it('empty linked list',()=>{
        let LL = new linkedList();
        expect(LL).toBeDefined();
    })
    
        it('insert into linked list',()=>{
            let LL = new linkedList();
            let value = 'test';
            LL.insert(value);
            expect(LL.head.value).toEqual(value);
        })
    
        it('point to first node in  linked list',()=>{
            let LL = new linkedList();
            let value = 'test';
            LL.insert(value);
            expect(LL.head.value).toEqual(value);
        })
    
      

    it('Will return true when finding a value within the linked list that exists',()=>{
        let LL = new linkedList();
        let val1 = 'test1';
        let val2 = 'test2';
        let val33 = 'test3';
        LL.insert(val1);
        LL.insert(val2);
        LL.insert(val33);
        expect(LL.includes('test2')).toBeTruthy(); 
    })

    it('Will return false when searching for a value in the linked list that does not exist',()=>{
        let LL = new linkedList();
        let val1 = 'test1';
        let val2 = 'test2';
        let val33 = 'test3';
        LL.insert(val1);
        LL.insert(val2);
        LL.insert(val33);
        expect(LL.includes('test')).toBeFalsy(); 
    })

})