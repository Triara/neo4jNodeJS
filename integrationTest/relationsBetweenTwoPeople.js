'use strict';

const should = require('chai').should(),
    deleteAllNodes = require('../src/deleteAllNodes.js'),
    Person = require('../src/person.js'),
    q = require('q');

describe('Relations between two persons', () => {
    this.timeout(5000);
    beforeEach(done => {
        deleteAllNodes().then(() => done());
    });

    it('Should create two persons and a relationship between them', done => {
        const personCortana = Person({name: 'Cortana'});
        const personJohn = Person({name: 'John'});

        q.all([
            personCortana.save(),
            personJohn.save()
        ]).then(() => {
            personCortana.relateTo('John').then(() => done());
        });
    });

    it('Should return all persons related to a given one with a limit of 25', done => {
        const personCortana = Person({name: 'Cortana'});
        const personJohn = Person({name: 'John'});

        q.all([
            personCortana.save(),
            personJohn.save()
        ]).then(() => {
            personCortana.relateTo('John').then(() => {
                personCortana.getRelations().then(relatedElements => {
                    should.exist(relatedElements);
                    relatedElements.length.should.equal(1);
                    relatedElements[0].person.properties.name.should.equal('John');
                    done();
                });
            });
        });
    });
});
