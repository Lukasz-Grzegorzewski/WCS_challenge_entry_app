const config = require('./config');

const { development: {db: { user, host, port, dbName, password }} } = config;
console.log( user, host, port, dbName, password );
const database = new Client({
    user,
    host,
    database,
    password
});

database
    .connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Error connecting to PostgreSQL', err));

module.exports = database;
