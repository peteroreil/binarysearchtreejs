class Node {
    constructor(props) {
        this.props = props;
        this.leftChild = null;
        this.rightChild = null;
    }

    get attributes() {
        return this.props;
    }

    set attributes(attr) {
        this.props = attr;
    }

    get key() {
        return this.id;
    }

    set key(key) {
        this.id = key;
    }

    get childNodes() {
        return {
            left: this.leftChild,
            right: this.rightChild
        }
    }

    setChild(position, node) {
        if(position === -1) {
            this.leftChild = node;
        } else {
            this.rightChild = node;
        }

        return this.childNodes;
    }

    getChildAt(position) {
        if (position === -1) {
            return this.leftChild;
        } else if (position === 1) {
            return this.rightChild
        }
    }

}

module.exports = Node;
