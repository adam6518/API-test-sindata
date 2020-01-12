var mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    password: 'adam1234',
    database: 'sindata_test',
    host: 'localhost'
})

module.exports = db