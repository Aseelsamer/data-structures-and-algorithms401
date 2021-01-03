'use strict';

const linkedList = require ('../Data Structuree/ll-insertion/ll-insertion');

describe('LinkedList Module',()=>{  
        it('Can successfully add a node to the end of the linked list',()=>{
            let LL = new linkedList();
            LL.insert(value);
            LL.insert(value1);
            LL.insert(value2);
            LL.insertAfter(1,5);
            expect(LL.toString).toEqual('{3} -> {2} -> {5} -> {1} -> NULL');
        })
    
        it('Can successfully insert a node after the last node of the linked list',()=>{
            let LL = new linkedList();
            LL.insert(value);
            LL.insert(value1);
            LL.insert(value2);
            LL.insertAfter(2,5);
            expect(LL.toString).toEqual('{3} -> {2} -> {5} -> {1} -> NULL');
        })
    
      
//head -> [1] -> [5] -> [3] -> [2] -> X
    it('Can successfully insert a node before a node located i the middle of a linked list',()=>{
        let LL = new linkedList();
        LL.insert(2);
        LL.insert(3);
        LL.insert(1);
        LL.insertBefore(3,5)
        expect(LL.toString).toBeEqual('[1] -> [5] -> [3] -> [2] -> NULL'); 
    })

    it('Can successfully insert a node before the first node of a linked list' , ()=>{
        let ll = new LinkedList();
       LL.insert(1);
       LL.insert(2)
       LL.insertBefore(1, 9);
    
        expect(LL.toString()).toEqual('{9} -> {1} -> {2} -> NULL');  
      });

      
      it('Can successfully insert after a node in the middle of the linked list' , ()=>{
        let LL = new linkedList();
        LL.insert(2);
        LL.insert(3);
        LL.insert(1);
        LL.insertAfter(3,5)
        expect(LL.toString).toBeEqual('[1] -> [5] -> [3] -> [2] -> NULL'); 
      });
})