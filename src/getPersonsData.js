'use strict';

const db = require('./dbConnection.js');

module.exports = personsName => {
    const query = [
        'MATCH (person:Person {name:\'' + personsName + '\'})',
        'RETURN person'
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
