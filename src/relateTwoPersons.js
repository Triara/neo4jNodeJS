'use strict';

const performQuery = require('./performQuery.js');

module.exports = (firstPersonName, secondPersonName) => {
    const query = [
        'MATCH (firstPerson:Person),(secondPerson:Person)',
        'WHERE firstPerson.name=\'' + firstPersonName + '\' AND secondPerson.name=\'' + secondPersonName + '\'',
        'CREATE (firstPerson)-[r:RELTYPE]->(secondPerson)',
        'RETURN r'
    ].join('\n');

    return performQuery(query);
};
