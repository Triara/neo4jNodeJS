'use strict';

const neo4j = require('neo4j');

const db = new neo4j.GraphDatabase('http://neo4j:neo4j@localhost:7474');


module.exports = dataToSave => {
    return new Promise((resolve, reject) => {
        db.cypher({
            query: 'CREATE (n:Person {data})',
            params: {data: dataToSave}
        }, (err, results) => {

            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
