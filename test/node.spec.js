/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const { expect } = require('chai');
const Node = require('../lib/Node.js');
const NodeComparer = require('../lib/NodeComparer.js');

describe('BST Node', function () {
    it('should create an instance', function () {
        const node = new Node();
        expect(node).to.be.instanceOf(Node);
    });

    it('should create a node with a key (identifier)', function () {
        const node = new Node({ id: 'someid', someprop: '' });
        node.key = 123;
        expect(node.key).to.equal(123);
        expect(node.attributes).to.deep.equal({ id: 'someid', someprop: '' });
    });

    it('should return child nodes from a node', function () {
        const node = new Node();
        node.key = 'doesntmatter';
        const children = node.childNodes;
        expect(children).to.deep.equal({ left: null, right: null });
        expect(node.getChildAt(-1)).to.equal(null);
        expect(node.getChildAt(1)).to.equal(null);
    });

    it('should set a child node to left', function () {
        const node = new Node();
        const child = new Node();
        const children = node.setChild(-1, child);
        expect(children.left).to.deep.equal(child);
        expect(children.right).to.equal(null);
        expect(node.getChildAt(-1)).to.deep.equal(child);
        expect(node.getChildAt(1)).to.equal(null);
    });

    it('should set a child node to right', function () {
        const node = new Node();
        const child = new Node();
        const children = node.setChild(1, child);
        expect(children.left).to.deep.equal(null);
        expect(children.right).to.equal(child);
    });
});

describe('BST NodeComparer', function () {
    it('should return 0 where compared node is equal', function () {
        const comparer = new NodeComparer();
        const nodeOne = new Node(123);
        const nodeTwo = new Node(123);
        const result = comparer.compare(nodeOne.id, nodeTwo.id);
        expect(result).to.equal(0);
    });

    it('should return -1 where compared nodeOne is less than nodeTwo', function () {
        const comparer = new NodeComparer();
        const nodeOne = new Node();
        const nodeTwo = new Node();
        nodeOne.key = 123;
        nodeTwo.key = 124;
        const result = comparer.compare(nodeOne.key, nodeTwo.key);
        expect(result).to.equal(-1);
    });

    it('should return +1 where compared nodeOne is greater than nodeTwo', function () {
        const comparer = new NodeComparer();
        const nodeOne = new Node();
        const nodeTwo = new Node();
        nodeOne.key = 124;
        nodeTwo.key = 123;
        const result = comparer.compare(nodeOne.key, nodeTwo.key);
        expect(result).to.equal(1);
    });

    it('should return 0 where compared node is equal with custom comparer', function () {
        const compareFunction = (n1, n2) => ((n1.someKey === n2.someKey) ? 0 : -2);
        const comparer = new NodeComparer({ compareFunction });
        const nodeOne = new Node();
        const nodeTwo = new Node();
        nodeOne.key = { someKey: 'samekey' };
        nodeTwo.key = { someKey: 'samekey' };
        const result = comparer.compare(nodeOne.key, nodeTwo.key);
        expect(result).to.equal(0);
    });

    it('should return -1 where compared nodeOne is less than nodeTwo with custom comparer', function () {
        const compareFunction = (n1, n2) => (
            (n1.someKey.length < n2.someKey.length) ? -1 : undefined
        );
        const comparer = new NodeComparer({ compareFunction });
        const nodeOne = new Node();
        const nodeTwo = new Node();
        nodeOne.key = { someKey: 'key' };
        nodeTwo.key = { someKey: 'biggerkey' };
        const result = comparer.compare(nodeOne.key, nodeTwo.key);
        expect(result).to.equal(-1);
    });

    it('should return +1 where compared nodeOne is greater than nodeTwo with custom comparer', function () {
        const compareFunction = (n1, n2) => (
            (n1.someKey.length < n2.someKey.length) ? -1 : 1
        );
        const comparer = new NodeComparer({ compareFunction });
        const nodeOne = new Node({ someKey: 'biggerkey' });
        const nodeTwo = new Node({ someKey: 'key' });
        nodeOne.key = { someKey: 'biggerkey' };
        nodeTwo.key = { someKey: 'key' };
        const result = comparer.compare(nodeOne.key, nodeTwo.key);
        expect(result).to.equal(1);
    });
});
