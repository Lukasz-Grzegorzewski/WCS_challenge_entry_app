require("dotenv").config();
const { Pool } = require('pg');
const fs = require('fs');
const config = require("./config");


// Database connection configuration
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
const dbConfig = {
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
};

// Create a new PostgreSQL pool
const pool = new Pool(dbConfig);

async function runMigration() {

    // Read SQL code from a file (DB.sql)
    const sqlFilePath = './DB.sql';
    const sqlCode = fs.readFileSync(sqlFilePath, 'utf8');

    // Open a connection from the pool
    const client = await pool.connect();

    try {
        // Begin a transaction
        await client.query('BEGIN');

        // Execute the SQL code from the file
        await client.query(sqlCode);

        // Commit the transaction
        await client.query('COMMIT');

        console.log('Migration completed successfully.');
    } catch (error) {
        console.error('Error during Execution of the SQL code from the file:', error);
    } finally {
        console.log('REALEASING connection');
        client.release();
    }

}

try {
    runMigration();
} catch (error) {
    console.error('Error during migration:', error.message);
} finally {
    console.log('Closing POOL');
    pool.end();
}

