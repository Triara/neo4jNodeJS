'use strict';

const performQuery = require('./storage/performQuery.js');

function saveData(dataToSave) {
    const query = 'CREATE (person:Person {data})',
        params = {data: dataToSave};

    return performQuery(query, params);
}

function getData(personsName) {
    const query = [
        'MATCH (person:Person {name:\'' + personsName + '\'})',
        'RETURN person'
    ].join('\n');

    return performQuery(query);
}

function getRelations(personsName) {
    const query = [
        'MATCH (Person {name:\'' + personsName + '\'})-->(person)',
        'RETURN person'
    ].join('\n');

    return performQuery(query);
}

function relateTo (firstPersonName, secondPersonName) {
    const query = [
        'MATCH (firstPerson:Person),(secondPerson:Person)',
        'WHERE firstPerson.name=\'' + firstPersonName + '\' AND secondPerson.name=\'' + secondPersonName + '\'',
        'CREATE (firstPerson)-[r:RELTYPE]->(secondPerson)',
        'RETURN r'
    ].join('\n');

    return performQuery(query);
}

module.exports = personsData => {
    return {
        'save': () => saveData(personsData),
        'get': () => getData(personsData.name),
        'getRelations': () => getRelations(personsData.name),
        'relateTo': secondPersonsName => relateTo(personsData.name, secondPersonsName)
    }
};
