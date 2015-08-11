'use strict';

const db = require('./dbConnection.js');

module.exports = query => {
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
