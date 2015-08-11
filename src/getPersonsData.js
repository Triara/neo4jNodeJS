'use strict';

const performQuery = require('./storage/performQuery.js');

module.exports = personsName => {
    const query = [
        'MATCH (person:Person {name:\'' + personsName + '\'})',
        'RETURN person'
    ].join('\n');

    return performQuery(query);
};
