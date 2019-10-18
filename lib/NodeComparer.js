const DefaultNodeComparer = require('./DefaultNodeComparer');

class NodeComparer extends DefaultNodeComparer {
    constructor(opts) {
        super();
        if (opts && opts.compareFunction) {
            this.compare = opts.compareFunction;
        }
    }
}

module.exports = NodeComparer;
