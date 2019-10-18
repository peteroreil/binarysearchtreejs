class DefaultNodeComparer {
    constructor() {
        this.EQUAL = 0;
        this.LESS_THAN = -1;
        this.GREATER_THAN = 1;
    }

    compare(nodeOneKey, nodeTwoKey) {
        if (nodeOneKey === nodeTwoKey) {
            return this.EQUAL;
        }
        return (nodeOneKey < nodeTwoKey) ? this.LESS_THAN : this.GREATER_THAN;
    }
}

module.exports = DefaultNodeComparer;
