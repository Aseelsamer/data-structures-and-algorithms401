'use strict';
const Node = require('./node');

class Linkedlist {
    constructor() {
        //include a head property
        this.head=null;
    }

//adds new node with value to the head .
    insert(value) {
        this.head = new Node(value, this.head)
    }
//return booleon result depending wether value exist or no.
    includes(value) {

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === this.value) {
                return true;
            }

            currentNode = currentNode.next;
        }
        return false;
    }

    toString(){
        //return all values in the linked list 
        let valArr = [];
        let currentNode = this.head;
    
        while (currentNode) {
    
          valArr.push(currentNode.value);
          currentNode = currentNode.next;
    
        }
    
        let string = '';
    
        for (let i = 0; i < valArr.length; i++) {
          string += `{${valArr[i]}} -> `;
        }
    
        let statement = (string + 'NULL');
        return statement;
      }
    }

}


module.exports = Linkedlist;