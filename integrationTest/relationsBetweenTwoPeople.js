'use strict';

const should = require('chai').should(),
    deleteAllNodes = require('../src/deleteAllNodes.js'),
    savePersonsData = require('../src/savePerson.js'),
    relateTwoPersons = require('../src/relateTwoPersons'),
    q = require('q');

describe('Relations between two persons', () => {
    beforeEach(done => {
        deleteAllNodes().then(() => done());
    });

    it('Should create two persons and a relationship between them', done => {
        const firstPerson = {name: 'Cortana'};
        const secondPerson ={name: 'John'};

        q.all([
            savePersonsData(firstPerson),
            savePersonsData(secondPerson)
        ]).then(() => {
             relateTwoPersons('Cortana', 'John').then(() => done());
        });
    });
});
