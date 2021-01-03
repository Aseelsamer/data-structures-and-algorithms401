const Node = require('../node');
const LinkedList = require('../linked-list');


class Insertion {
    constructor() {
        this.head = null;
    }

    append(value) {
        // create a new node to be appended
        let node = new Node(value);
        // what if my LL is empty? then the new node is head
        if (!this.head) {
            this.head = node;
            return this;
        }
        // if I have stuff already, need to add at the end;
       let currentNode = this.head;
       while(currentNode.next) {
          currentNode = currentNode.next;
       }
       // exited the while because currentNode.next is null == reaching tail
       currentNode.next = node;
       return this;
    }

    insertBefore(value,newValue){
        let currentNode =this.head;
        let node = new Node(newValue);

        if(currentNode.value === value){
            node.next= currentNode;
            this.head = node;

            return this;
        }

        currentNode = currentNode.next;
    }

    insertAfter(value, newVal){
    let currentNode = this.head;
    let newNode = new Node(newVal, null);

    while(currentNode) {
      if (currentNode.value === value) {

        newNode.next = currentNode.next;

        currentNode.next = newNode;

        break;
      }
      currentNode = currentNode.next;
    }
  }
}


module.exports= Insertion;