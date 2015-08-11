'use strict';

const db = require('./dbConnection.js');

const queryForDeleteAllNodes = [
    'MATCH (n)',
    'OPTIONAL MATCH (n)-[r]-()',
    'DELETE n,r'
].join('\n');


module.exports = () => {
    return new Promise((resolve, reject) => {
        db.cypher({
            query: queryForDeleteAllNodes
        }, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
