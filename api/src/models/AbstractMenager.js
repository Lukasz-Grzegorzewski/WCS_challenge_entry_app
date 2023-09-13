const { Pool } = require('pg');
const config = require('../../config');

const { development: { db: { user, host, port, dbName, password } } } = config;
const database = new Pool({
    user,
    host,
    database: dbName,
    password
});
database
    .connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Error connecting to PostgreSQL', err));

class AbstractManager {
    constructor({ table }) {
        this.table = table;
        this.database = database;
    }
}

module.exports = AbstractManager;