'use strict';

const should = require('chai').should(),
    deleteAllNodes = require('../src/deleteAllNodes.js'),
    person = require('../src/person.js');

describe('Save and get people info', () => {
    this.timeout(5000);
    const personData = {
        name: 'Cortana',
        id: '1234-Halo5',
        location: 'City A'
    };

    beforeEach(done => {
        deleteAllNodes().then(() => done());
    });

    it('Should save a person info', done => {
        person.save(personData).then(() => done());
    });

    it('Should get back a person\'s data', done => {
        person.save(personData).then(() => {
            person.get('Cortana').then(foundData => {
                should.exist(foundData[0].person.properties);

                const person = foundData[0].person.properties;
                person.location.should.equal('City A');
                person.id.should.equal('1234-Halo5');
                done();
            });
        });
    });

    it('Should not return anything if there is no data in the system', done => {
        person.get('Cortana').then(foundData => {
            foundData.should.be.empty;
            done();
        });
    });
});
