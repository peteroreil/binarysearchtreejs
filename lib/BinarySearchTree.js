const Node = require('./Node.js');
const NodeComparer = require('./NodeComparer.js');

class BinarySearchTree {
    constructor() {
        this.nodes = 0;
        this.root = null;
        this.comparer = new NodeComparer();
    }

    insert(key, node) {
        const newNode = new Node(node);
        newNode.key = key;
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertRecurseTree(newNode, this.root);
        }
    }

    find(key) {
        return this.findRecurseTree(key, this.root);
    }

    insertRecurseTree(node, parentNode) {
        const comparrison = this.comparer.compare(node.key, parentNode.key);
        if (parentNode.getChildAt(comparrison) !== null) {
            const parentNodeCandidate = parentNode.getChildAt(comparrison);
            this.insertRecurseTree(node, parentNodeCandidate);
        } else {
            parentNode.setChild(comparrison, node);
        }
    }

    findRecurseTree(key, node) {
        const comparrison = this.comparer.compare(key, node.key);
        if (comparrison === 0) {
            return node;
        } if (comparrison === -1) {
            return this.findRecurseTree(key, node.childNodes.left);
        } if (comparrison === 1) {
            return this.findRecurseTree(key, node.childNodes.right);
        }
        return null;
    }
}

module.exports = BinarySearchTree;
