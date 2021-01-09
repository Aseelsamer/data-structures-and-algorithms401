'use strict';
const Node = require('../linked-list/node');

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

    numFromtheEnd(k){
        if(head==null){
			return 0;
		}
		currentNode = head;
		while(k>0){
			currentNode=currentNode.next;
			k--;
		}
		secNode= head;
		while(currentNode!=null){
			currentNode = currentNode.next;
			secNode = secNode.next;
		}
		let i  = secNode.data;
		return i;
    }

}

module.exports = Linkedlist;