'use strict';

const performQuery = require('./performQuery.js');

const queryForDeleteAllNodes = [
    'MATCH (n)',
    'OPTIONAL MATCH (n)-[r]-()',
    'DELETE n,r'
].join('\n');


module.exports = () => {
    return performQuery(queryForDeleteAllNodes);
};
