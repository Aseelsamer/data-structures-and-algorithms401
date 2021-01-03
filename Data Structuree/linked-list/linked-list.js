'use strict';
const Node = require('./node');

class Linkedlist {
    constructor() {
        //include a head property
        this.head=null;
    }

//adds new node with value to the head .
    insert(value) {
        let node = new Node(value);
    }
//return booleon result depending wether value exist or no.
    includes(value1) {

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value1 === this.value1) {
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




module.exports = Linkedlist;