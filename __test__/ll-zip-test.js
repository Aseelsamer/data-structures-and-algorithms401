'use strict';
const Linkedlist=require('../Data Structuree/linked-list/linked-list');
const ZipList=require('../Data Structuree/ll-zip/ll-zip');

describe('Zip list',()=>{
    it('should only return list1 if list2 is empty',()=>{
const LL = new Linkedlist();
LL.insert('1');
LL.insert('2');
LL.insert('3');
const LL2 = new Linkedlist();
expect(ZipList(LL,LL2).toBeEqual('[1]->[2]->[3]->X'))
    })
});

it('should only return list2 if list1 is empty',()=>{
    const LL2 = new Linkedlist();
    LL.insert('1');
    LL.insert('2');
    LL.insert('3');
    const LL = new Linkedlist();
    
    expect(ZipList(LL,LL2).toBeEqual('[1]->[2]->[3]->X'))
        });

        it('should return an exception if both lists are empty', () => {
            const LL= new LinkedList();
            const LL2 = new LinkedList();
          
            expect((zipLists(LL, LL2)).toStrictEqual('exception');
          });

