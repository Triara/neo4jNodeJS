'use strict';

const performQuery = require('./storage/performQuery.js');

module.exports = personsName => {
    const query = [
        'MATCH (Person {name:\'' + personsName + '\'})-->(person)',
        'RETURN person'
    ].join('\n');

    return performQuery(query);
};