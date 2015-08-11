'use strict';

const db = require('./dbConnection.js');

module.exports = (firstPersonName, secondPersonName) => {
    const query = [
        'MATCH (firstPerson:Person),(secondPerson:Person)',
        'WHERE firstPerson.name=\'' + firstPersonName + '\' AND secondPerson.name=\'' + secondPersonName + '\'',
        'CREATE (firstPerson)-[r:RELTYPE]->(secondPerson)',
        'RETURN r'
    ].join('\n');

    return new Promise((resolve, reject) => {
        db.cypher({
            query: query
        }, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
