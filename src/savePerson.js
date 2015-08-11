'use strict';

const performQuery = require('./storage/performQuery.js');

module.exports = dataToSave => {
    const query = 'CREATE (person:Person {data})',
        params = {data: dataToSave};

    return performQuery(query, params);
};
