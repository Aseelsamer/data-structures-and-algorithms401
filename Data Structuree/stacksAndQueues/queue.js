'use strict'l
const Node = require('./stacks).Node;
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


module.exports= Queue;
