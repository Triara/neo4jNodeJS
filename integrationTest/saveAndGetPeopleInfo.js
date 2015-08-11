'use strict';

const should = require('chai').should(),
    deleteAllNodes = require('../src/deleteAllNodes.js'),
    getPersonsData = require('../src/getPersonsData.js'),
    savePersonsData = require('../src/savePerson.js');

describe('Save and get people info', () => {

    const personData = {
        name: 'Cortana',
        id: '1234-Halo5',
        location: 'City A'
    };

    beforeEach(done => {
        deleteAllNodes().then(() => done());
    });

    it('Should save a person info', done => {
        savePersonsData(personData).then(() => done());
    });

    it('Should get back a person\'s data', done => {
        savePersonsData(personData)
            .then(() => {
                getPersonsData('Cortana')
                    .then(foundData => {
                        should.exist(foundData[0].person.properties);

                        const person = foundData[0].person.properties;
                        person.location.should.equal('City A');
                        person.id.should.equal('1234-Halo5');
                        done();
                    });
            });
    });
});
