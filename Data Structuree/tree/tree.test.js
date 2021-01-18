
'use strict';
let object =  require('../tree/tree');
const Node = object.Node;
const BinaryTree = object.BinaryTree;
const BinarySearchTree = object.BinarySearchTree;

describe('Binarytree ', () => {
    it('Can successfully instantiate a tree with a single root node', () => {
        let newNode = new Node(3);
        expect(newNode.value).toBe(3);
    })

    it('Can successfully add a left child and right child to a single root node', () => {
        let two = new Node(2);
        let three = new Node(3);
        let newNode = new Node(1, two, three);
        expect(newNode.value).toBe(1);
        expect(newNode.left).toBe(two);
        expect(newNode.right).toBe(three);
    })

    it('Can successfully return a collection from a preorder traversal',()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3,two,one);
        let tree = new BinaryTree(three);
        let results= tree.preOrder();
        expect(results).toEqual([3,2,1]);
    })

    it('Can successfully return a collection from a inorder traversal',()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3,two,one);
        let tree = new BinaryTree(three);
        let results= tree.inOrder();
        expect(results).toEqual([2,3,1]);
    })

    it('Can successfully return a collection from a postorder traversal',()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3,two,one);
        let tree = new BinaryTree(three);
        let results= tree.postOrder();
        expect(results).toEqual([2,1,3]);
    })


})