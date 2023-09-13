require("dotenv").config();

var config = {
    development: {
        server: {
            appPort: process.env.APP_PORT
        },
        db: {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dbName: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
        },
    },
    production: {}
};
module.exports = config;