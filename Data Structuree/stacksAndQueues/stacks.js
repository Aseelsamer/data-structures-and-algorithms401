'use strict';

//Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
class Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

class Stack{
    constructor(){
        this.top=null;
    }

    push(item){
        this.top = new Node(item,this.top);
    }

    pop(){
        if (this.isEmpty()) {
            throw new Error('cannot pop empty stack');
          }
      
          //remove the node from top,and return value
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;
      
    }

    peek(){//return value of the node located on the top 


        if (this.isEmpty()) {
            throw new Error('cannot pop empty stack');
          }

        return this.top;
    }

    isEmpty(){
        if(this.top == null){
          return true;
        } 
        return false ;
      }
}

class Queue{
    constructor(){
        this.storage = new Array();
        this.first = null;
        this.rear = null;
    }

    enqueue(value){
      let node  = new Node (this.storage,value);
    }

    dequeue(){
        if(this.first == null){
          return 'Exception Empty Stack';
        }
        let output = this.storage.shift();
        this.first = this.storage[0];
        return output.value;
      }

    peek(){
        if(this.first == null){
          return 'Exception Empty Stack';
        }
        return this.first.value;
    
      }

      isEmpty() {

        if (this.first) {
          return false;
        }
    
        return true;
    
      }

}

module.exports=Stack;
module.exports=Node;
module.exports=Queue;