/*
var mysql = require('mysql');

function Connection() {
    this.pool = null;

    this.init = function() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'user',
            password : 'user',
            port: 3306,
            database: 'quizdb',
            dateStrings: 'date'
        });
    };

    this.acquire = function(callback) {
        this.pool.getConnection(function(err, connection) {
            callback(err, connection);
        });
    };
}
module.exports = new Connection();*/
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "user"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a database named "mydb":*/
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});
