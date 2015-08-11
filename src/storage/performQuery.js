'use strict';

const db = require('./dbConnection.js');

module.exports = (query, params) => {
    return new Promise((resolve, reject) => {
        db.cypher({
            query: query,
            params: params
        }, (err, results) => {

            console.log('======================')
            console.log(err)
            console.log(results)

            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
