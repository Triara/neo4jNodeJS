'use strict';

const performQuery = require('./storage/performQuery.js');

function saveData (dataToSave) {
    const query = 'CREATE (person:Person {data})',
        params = {data: dataToSave};

    return performQuery(query, params);
}

function getData (personsName) {
    const query = [
        'MATCH (person:Person {name:\'' + personsName + '\'})',
        'RETURN person'
    ].join('\n');

    return performQuery(query);
}

module.exports = personsData => {
    return {
        save: () => saveData(personsData),
        'get': () => getData(personsData.name)
    }
};
