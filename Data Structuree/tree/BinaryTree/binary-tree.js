'use strict';

const tree = require('../tree');
const BinaryTree = tree.BinaryTree;

class bridthFirst extends BinaryTree{
    constructor(tree){
    super(tree)
    }

    bFirst(tree){
        if(!tree){
            return 'empty tree';
        }

        let array=[];
        let array1 =[];
        array.push(tree.root);

        while(array){
            let node;
        array1.push(node);

        if(node.left) array.push(node.left);
        if(node.right) array.push(node.right);

        }
        return array1;
    }
}

module.exports=bridthFirst;