'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {

        this.root = root;
    }

    preOrder() {
        let results = [];

        let _traverse = (node) => {
            results.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);

        return results;
    }

    inOrder() {
        let results = [];

        let _traverse = (node) => {
            if (node.left) _traverse(node.left);
            results.push(node.value);
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);

        return results;
    }

    postOrder() {
        let results = [];

        let _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            results.push(node.value);
        }

        _traverse(this.root);

        return results;
    }

    findMaxValue(current){
if (this.root === null){
    return 0 ;
} else {
    let leftMax , rightMax ;

    //store the data 
    let max = current.data;

    if(current.left != null){
        leftMax=this.findMaxValue(current.left);
        max= Math.max(max,leftMax);
    }

    if(current.right != null){
        rightMax=this.findMaxValue(current.left);
        max= Math.max(max,rightMax);
    }
    return max;
}

    }
}

// const b = new BinaryTree();

// b.root=new Node(15);
// console.log(b.root);
// b.left=new Node(17);
// console.log(b.left);
// b.right=new Node(15);
// b.right.right=new Node(23);
// console.log(b.right);

class BinarySearchTree extends BinaryTree{
    add(value) {

        let newNode  = new Node(value);
        let current = this.root;
    
        while(current) {
    
          if (newNode.value > current.value) {
            if (current.right) {
              current = current.right;
            } else {
              current.right = newNode;
              break;
            }
          } else if (newNode.value < current.value) {
            if (current.left) {
              current = current.left;
            } else {
              current.left = newNode;
              break;
            }
          }
    
        }
    
      }

    contains() {
        //accepts a value, and returns a boolean 
        //indicating whether or not the value is in the tree at least once

        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            }
            if (value > current.value) {
                if (current.right) {
                    current = current.right;
                } else {
                    return false;}
                }else if (value < current.value) {
                    if (current.left) {
                        current = current.left;
                    } else {
                        return false;
                    }
                }
            
        }
    }
}

module.exports = Node;
module.exports = BinaryTree;
module.exports = BinarySearchTree;