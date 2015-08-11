const neo4j = require('neo4j');

const uri = process.env['NEO4J_AUTH'] ? 'http://' + process.env['NEO4J_AUTH'] + '@localhost:7474' : 'http://localhost:7474';
const db = new neo4j.GraphDatabase(uri);

module.exports = db;
