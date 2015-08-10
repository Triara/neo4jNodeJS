'use strict';

const should = require('chai').should(),
    saveData = require('../src/savePerson.js');

describe('Save and get people info', () => {
    it('Should save a person info', done => {
        const personData = {
            name: 'Cortana',
            id: '1234-Halo5',
            location: 'City A'
        };

        saveData(personData).then(() => done());
    });
});
