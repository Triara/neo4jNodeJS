'use strict';

const should = require('chai').should(),
    deleteAllNodes = require('../src/deleteAllNodes.js'),
    savePersonsData = require('../src/savePerson.js'),
    relateTwoPersons = require('../src/relateTwoPersons'),
    getRelationsOfAPerson = require('../src/getRelationsOfAPerson.js'),
    q = require('q');

describe('Relations between two persons', () => {
    beforeEach(done => {
        deleteAllNodes().then(() => done());
    });

    it('Should create two persons and a relationship between them', done => {
        const firstPerson = {name: 'Cortana'};
        const secondPerson = {name: 'John'};

        q.all([
            savePersonsData(firstPerson),
            savePersonsData(secondPerson)
        ]).then(() => {
            relateTwoPersons('Cortana', 'John').then(() => done());
        });
    });

    it.only('Should return all persons related to a given one with a limit of 25', done => {
        const firstPerson = {name: 'Cortana'};
        const secondPerson = {name: 'John'};

        q.all([
            savePersonsData(firstPerson),
            savePersonsData(secondPerson)
        ]).then(() => {
            relateTwoPersons('Cortana', 'John').then(() => {
                getRelationsOfAPerson('Cortana').then(relatedElements => {
                    should.exist(relatedElements);
                    relatedElements.length.should.equal(1);
                    relatedElements[0].person.properties.name.should.equal('John');
                    done();
                });
            });
        });
    });
});
