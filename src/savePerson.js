'use strict';

const db = require('./dbConnection.js');

module.exports = dataToSave => {
    return new Promise((resolve, reject) => {
        db.cypher({
            query: 'CREATE (person:Person {data})',
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
