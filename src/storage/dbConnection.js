const neo4j = require('neo4j');
const db = new neo4j.GraphDatabase('http://neo4j:pass@localhost:7474');

module.exports = db;