'use strict';

const should = require('chai').should(),
    deleteAllNodes = require('../src/deleteAllNodes.js'),
    person = require('../src/person.js'),
    relateTwoPersons = require('../src/relateTwoPersons'),
    getRelationsOfAPerson = require('../src/getRelationsOfAPerson.js'),
    q = require('q');

describe('Relations between two persons', () => {
    this.timeout(5000);
    beforeEach(done => {
        deleteAllNodes().then(() => done());
    });

    it('Should create two persons and a relationship between them', done => {
        const firstPerson = {name: 'Cortana'};
        const secondPerson = {name: 'John'};

        q.all([
            person.save(firstPerson),
            person.save(secondPerson)
        ]).then(() => {
            relateTwoPersons('Cortana', 'John').then(() => done());
        });
    });

    it('Should return all persons related to a given one with a limit of 25', done => {
        const firstPerson = {name: 'Cortana'};
        const secondPerson = {name: 'John'};

        q.all([
            person.save(firstPerson),
            person.save(secondPerson)
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
