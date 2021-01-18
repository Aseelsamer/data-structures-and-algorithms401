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

    findMaximumValue() {
        if (!this.root) {
          throw new Error('Cannot find value in an empty tree');
        }
    
        let maxValue = this.root.value;
    
        function _maxValue(root) {
          if (!root) {
            return;
          }
    
          if (root.value > maxValue) {
            maxValue = root.value;
          }
    
          if (root.left) { _maxValue(root.left); }
          if (root.right) { _maxValue(root.right); }
        }
    
        _maxValue(this.root);
        return maxValue;
      }
}



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

module.exports = {Node,BinaryTree,BinarySearchTree}; 