require('dotenv').config();
if (process.env.MYSQL_HOST) module.exports = require('./mysql');


