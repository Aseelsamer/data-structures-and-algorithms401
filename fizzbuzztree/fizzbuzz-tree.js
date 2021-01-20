'use strict';

const Node = require('../Data Structuree/linked-list/node');
const Tree = require('../Data Structuree/tree/tree');


const FizzBuzzTree = (tree) =>{
    // let root = tree.root;
    let newTree = new Tree();
    newTree.root= new Node();

    function _traverse(root){
        if(!root){
            return;
        }
        //to check the value
        helper(tree.root);

        if(root.left){
            _traverse(root.left)
        }
        if(root.right){
            _traverse(root.right)
        }

    }
    _traverse(root);
    return tree;
}

function helper(node){
    if(!node){
        return;
    }else  if (node.value % 5 === 0 && node.value % 3 === 0){
        node.value = 'FuzzBuzz';
    }else if (node.value % 5 === 0){
        node.value = 'Buzz';
    }else if (node.value % 3 === 0){
        node.value = 'Fuzz';
    }else node.value= node.value.toString();
}

module.exports=FizzBuzzTree;