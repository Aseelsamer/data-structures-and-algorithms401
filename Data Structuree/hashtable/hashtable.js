'use strict';


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        //return me the values of the ll in an array by traversing it
        const values = [];
        let current = this.head;
        while(current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
      }
    
      add(key, value) {
        // hash the key
        const index = this.hash(key);
        // handle collisions
        const contents = this.buckets[index];
    
        // add key:value pair to the table
        if (contents === undefined) {
          this.buckets[index] = [ [key, value] ];
        } else {
          contents.push([key, value]);
        }
    
      }

      get(key) {
        // hash the key
        const index = this.hash(key);
        // return value matched to key
        const items = this.buckets[index];
    
        if (items === undefined) {
          return null;
        } else {
          for (let item of items) {
            if(item[0] === key) {
              return item[1];
            }
          }
        }
      }


      contains(key) {
        // return a boolean indicating whether
        // the key already exists in the table
    
        const index = this.hash(key);
    
        if (this.buckets[index] === undefined) {
          return false;
        }
    
        if (this.buckets[index]) {
          return true;
        }
      }


  hash(key) {
    // takes in an arbitrary key (string)
    // returns the index to be associated with the hashed key (integer)

    let sum = 0;
    for (let char of key) {
      sum += char.charCodeAt(char);
    }

    let index = ((sum * 599) % this.buckets.length);

    return index;

  }

}

module.exports = HashTable;



