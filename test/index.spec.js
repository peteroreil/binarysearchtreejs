/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const { expect } = require('chai');
const BinarySearchTree = require('../index.js');

describe('BST', function () {
    it('should create an instance', function () {
        const bst = new BinarySearchTree();
        expect(bst).to.be.instanceOf(BinarySearchTree);
    });

    it('should insert a root node', function () {
        const bst = new BinarySearchTree();
        bst.insert(123, { somekey: 'someValue' });
        expect(bst.root.key).to.equal(123);
    });

    it('should insert multiple nodes', function () {
        const bst = new BinarySearchTree();
        bst.insert(123, { somekey: 'someValue' });
    });

    it('should insert a single child of root', function () {
        const bst = new BinarySearchTree();
        bst.insert(123, { somekey: 'someValue' });
        bst.insert(124, { somekey: 'someOtherValue' });
        const root = bst.find(123);
        const child = bst.find(124);
        expect(root.childNodes.right).to.deep.equal(child);
    });

    it('should insert two children of root', function () {
        const bst = new BinarySearchTree();
        bst.insert(123, {});
        bst.insert(10000, {});
        bst.insert(1, {});
        const { root } = bst;
        const rightChild = bst.find(10000);
        const leftChild = bst.find(1);
        expect(root.childNodes.right).to.deep.equal(rightChild);
        expect(root.childNodes.left).to.deep.equal(leftChild);
    });

    //              5
    //             / \
    //            /   \
    //           3     8
    //          / \   / \
    //         1   4 6   9
    it('should insert many children correctly', function () {
        const bst = new BinarySearchTree();
        bst.insert(5, {}); // root
        bst.insert(3, {}); // N1 - root left-child
        bst.insert(8, {}); // N2 - root right-child
        bst.insert(1, {}); // N3 - N1 left-child
        bst.insert(4, {}); // N4 - N1 right-child
        bst.insert(6, {}); // N5 - N2 left-child
        bst.insert(9, {}); // N6 - N2 right-child

        const { root } = bst;
        const nodeOne = bst.find(3);
        const nodeTwo = bst.find(8);
        const nodeThree = bst.find(1);
        const nodeFour = bst.find(4);
        const nodeFive = bst.find(6);
        const nodeSix = bst.find(9);
        expect(root.childNodes.left).to.deep.equal(nodeOne);
        expect(root.childNodes.right).to.deep.equal(nodeTwo);
        expect(nodeOne.childNodes.left).to.deep.equal(nodeThree);
        expect(nodeOne.childNodes.right).to.deep.equal(nodeFour);
        expect(nodeTwo.childNodes.left).to.deep.equal(nodeFive);
        expect(nodeTwo.childNodes.right).to.deep.equal(nodeSix);
    });

    // TODO Error cases:
    // find where id does not exist!
});
